'use client';

import { Layout } from '@/src/widgets/layout';
import { GET_RESTAURANTS } from '@/src/entities/restaurant/api';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState, useMemo, memo } from 'react';
import { Star } from 'lucide-react';
import { RestaurantEdge } from '@/src/shared/utils/gql/graphql';
import { RestaurantNode } from '@/src/entities/restaurant/model';
import { useFavorite } from '@/src/features/favorite/hooks';
import { FavoriteButton } from '@/src/features/favorite/ui';

// 탭 메뉴 상수화
const LOCATION_TABS = ['전국', '서울', '경기', '인천', '제주'];

// memo로 최적화된 RestaurantCard
const RestaurantCard = memo(
    ({
        restaurant,
        isFavorite,
        isProcessing,
        onFavoriteToggle,
    }: {
        restaurant: RestaurantNode;
        isFavorite: boolean;
        isProcessing: boolean;
        onFavoriteToggle: (id: number) => void;
    }) => {
        const router = useRouter();
        const imageUrl = restaurant.restaurant_imageCollection?.edges[0]?.node.image_url || '/placeholder-food.jpg';

        return (
            <div
                className="flex border-b border-gray-200 py-4 mt-4 cursor-pointer"
                onClick={() => router.push(`/restaurant/${restaurant.id}`)}
            >
                <div className="relative w-24 h-24 flex-shrink-0 mr-3 rounded-md overflow-hidden">
                    <Image src={imageUrl} alt={restaurant.name} fill className="object-cover" />
                </div>

                <div className="flex-1">
                    <div className="text-sm text-gray-600 mb-1">
                        {restaurant.cuisine_type || '한식'} • {'서울'}
                    </div>

                    <h3 className="text-lg font-medium mb-1">{restaurant.name}</h3>

                    <div className="flex items-center mb-2">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="font-bold ml-1">4.4</span>
                        <span className="text-gray-500 text-sm ml-1">리뷰 2,824개</span>
                    </div>
                </div>

                <FavoriteButton
                    isFavorite={isFavorite}
                    isProcessing={isProcessing}
                    onClick={(e) => {
                        e.stopPropagation();
                        onFavoriteToggle(restaurant.id);
                    }}
                />
            </div>
        );
    }
);
RestaurantCard.displayName = 'RestaurantCard';

// 상태 컴포넌트들
const LoadingState = () => (
    <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
    </div>
);

const ErrorState = memo(({ message }: { message: string }) => (
    <div className="p-4 m-4 bg-red-50 border border-red-200 rounded-md text-red-700">
        <h3 className="font-bold">오류가 발생했습니다</h3>
        <p>{message}</p>
    </div>
));
ErrorState.displayName = 'ErrorState';

const EmptyState = memo(() => (
    <div className="text-center p-10">
        <p className="text-lg text-gray-500">표시할 레스토랑이 없습니다.</p>
    </div>
));
EmptyState.displayName = 'EmptyState';

export const RestaurantScreen = () => {
    const { toggleFavorite, isProcessing, isFavorite, favoritesLoading, favoritesError } = useFavorite();
    const { data: restaurantsData, loading: restaurantsLoading, error: restaurantsError } = useQuery(GET_RESTAURANTS);
    const [activeTab, setActiveTab] = useState<string>('전국');

    // 레스토랑 데이터 가공 로직 메모이제이션
    const restaurants = useMemo(() => {
        return (
            restaurantsData?.restaurantCollection?.edges?.map((edge: RestaurantEdge) => edge?.node).filter(Boolean) ||
            []
        );
    }, [restaurantsData]);

    // 모든 로딩 상태 처리
    if (restaurantsLoading || favoritesLoading) return <LoadingState />;

    // 모든 에러 상태 처리
    if (restaurantsError) return <ErrorState message={restaurantsError.message} />;
    if (favoritesError) return <ErrorState message={favoritesError.message} />;

    return (
        <Layout>
            {/* 탭 메뉴 */}
            <div className="border-b overflow-x-auto scrollbar-hide">
                <div className="flex w-full">
                    {LOCATION_TABS.map((tab) => (
                        <button
                            key={tab}
                            className={`px-8 py-3 text-center flex-1 whitespace-nowrap ${
                                activeTab === tab
                                    ? 'border-b-2 border-indigo-600 text-indigo-600 font-medium'
                                    : 'text-gray-500'
                            }`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* 레스토랑 목록 */}
            {restaurants.length === 0 ? (
                <EmptyState />
            ) : (
                <div>
                    {restaurants.map((restaurant: RestaurantNode) => (
                        <RestaurantCard
                            key={restaurant.id}
                            restaurant={restaurant}
                            isFavorite={isFavorite(restaurant.id)}
                            isProcessing={isProcessing(restaurant.id)}
                            onFavoriteToggle={toggleFavorite}
                        />
                    ))}
                </div>
            )}
        </Layout>
    );
};
