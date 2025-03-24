// src/features/favorite/hooks/useFavorite.ts
import { useCallback, useMemo, useState } from 'react';
import { useQuery, useMutation, useApolloClient } from '@apollo/client';
import { ADD_FAVORITE, GET_FAVORITES, REMOVE_FAVORITE } from '@/src/features/favorite/api';
import { useUserStore } from '@/src/entities/user/model/store';
import { FavoritesResult } from '@/src/features/favorite/store';

export const useFavorite = () => {
    const { user } = useUserStore();
    const client = useApolloClient();
    const [processingIds, setProcessingIds] = useState<number[]>([]);

    // 즐겨찾기 쿼리
    const {
        data: favoritesData,
        loading: favoritesLoading,
        error: favoritesError,
    } = useQuery<FavoritesResult>(GET_FAVORITES);

    // 즐겨찾기 추가 뮤테이션
    const [addFavorite] = useMutation(ADD_FAVORITE);

    // 즐겨찾기 삭제 뮤테이션
    const [removeFavorite] = useMutation(REMOVE_FAVORITE);

    // 즐겨찾기된 레스토랑 ID 배열
    const favorites = useMemo(
        () => favoritesData?.favoritesCollection?.edges?.map((edge) => edge.node.restaurant_id) || [],
        [favoritesData]
    );

    // 즐겨찾기 상태 확인
    const isFavorite = useCallback((restaurantId: number) => favorites.includes(restaurantId), [favorites]);

    // 처리 중인지 확인
    const isProcessing = useCallback((restaurantId: number) => processingIds.includes(restaurantId), [processingIds]);

    // 낙관적 업데이트를 위한 캐시 업데이트
    const updateCache = useCallback(
        (restaurantId: number, isAdding: boolean) => {
            try {
                // 현재 캐시 데이터 가져오기
                const currentData = client.readQuery({
                    query: GET_FAVORITES,
                });

                if (!currentData) return;

                // 현재 즐겨찾기 항목 배열
                const currentEdges = currentData.favoritesCollection?.edges || [];

                let updatedEdges;

                if (isAdding) {
                    // 추가하는 경우
                    if (currentEdges.some((edge) => edge.node.restaurant_id === restaurantId)) {
                        return; // 이미 존재하면 중복 추가 방지
                    }

                    // 새 항목 추가
                    updatedEdges = [
                        ...currentEdges,
                        {
                            __typename: 'favoritesEdge',
                            node: {
                                __typename: 'favorites',
                                id: `temp-${Date.now()}`, // 임시 ID
                                restaurant_id: restaurantId,
                                user_id: user?.id,
                            },
                        },
                    ];
                } else {
                    // 삭제하는 경우
                    updatedEdges = currentEdges.filter((edge) => edge.node.restaurant_id !== restaurantId);
                }

                // 캐시 업데이트
                client.writeQuery({
                    query: GET_FAVORITES,
                    data: {
                        favoritesCollection: {
                            __typename: 'favoritesConnection',
                            edges: updatedEdges,
                        },
                    },
                });
            } catch (error) {
                console.error('캐시 업데이트 오류:', error);
                // 오류 발생 시 캐시 업데이트 생략 (서버 응답 후 자동 업데이트)
            }
        },
        [client, user]
    );
    // 즐겨찾기 토글 함수
    const toggleFavorite = useCallback(
        async (restaurantId: number) => {
            if (!user?.id) {
                alert('즐겨찾기를 사용하려면 로그인이 필요합니다.');
                return false;
            }

            if (isProcessing(restaurantId)) return false;

            const isFav = isFavorite(restaurantId);

            // 처리 중인 ID 추가
            setProcessingIds((prev) => [...prev, restaurantId]);

            // 낙관적 업데이트
            updateCache(restaurantId, !isFav);

            try {
                if (isFav) {
                    // 즐겨찾기 제거
                    await removeFavorite({
                        variables: {
                            userId: user.id,
                            restaurantId,
                        },
                        optimisticResponse: {
                            deleteFromfavoritesCollection: {
                                affectedCount: 1,
                            },
                        },
                    });
                } else {
                    // 즐겨찾기 추가
                    await addFavorite({
                        variables: {
                            userId: user.id,
                            restaurantId,
                        },
                        optimisticResponse: {
                            insertIntofavoritesCollection: {
                                records: [
                                    {
                                        id: `temp-${Date.now()}`,
                                        restaurant_id: restaurantId,
                                    },
                                ],
                            },
                        },
                    });
                }
                return true;
            } catch (error) {
                console.error('즐겨찾기 업데이트 실패:', error);
                alert('즐겨찾기 업데이트에 실패했습니다.');

                // 실패 시 캐시 원복
                updateCache(restaurantId, isFav);
                return false;
            } finally {
                // 처리 중인 ID 제거
                setProcessingIds((prev) => prev.filter((id) => id !== restaurantId));
            }
        },
        [user, isFavorite, isProcessing, updateCache, removeFavorite, addFavorite]
    );

    return {
        favorites,
        isFavorite,
        isProcessing,
        toggleFavorite,
        favoritesLoading,
        favoritesError,
    };
};
