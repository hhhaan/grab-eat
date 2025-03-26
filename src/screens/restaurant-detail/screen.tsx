'use client';

import { Layout } from '@/src/widgets/layout';
import { useParams } from 'next/navigation';
import { GET_RESTAURANT_BY_ID } from '@/src/entities/restaurant/api';
import { useQuery } from '@apollo/client';
import { Restaurant_ImageEdge } from '@/src/shared/utils/gql/graphql';
import Image from 'next/image';

export const RestaurantDetailScreen = () => {
    const params = useParams();
    const id = params.id;

    const { data, loading, error } = useQuery(GET_RESTAURANT_BY_ID, {
        variables: { id: Number(id) },
    });
    if (!id) {
        return <div>레스토랑 ID를 찾을 수 없습니다.</div>;
    }

    if (loading) {
        return <div>로딩 중...</div>;
    }
    if (error) {
        return <div>오류 발생: {error.message}</div>;
    }

    if (!data || !data.restaurantCollection || !data.restaurantCollection.edges[0]) {
        return <div>레스토랑 정보를 찾을 수 없습니다</div>;
    }

    const restaurant = data.restaurantCollection.edges[0].node;

    const mainImage = restaurant.restaurant_imageCollection?.edges.find(
        (edge: Restaurant_ImageEdge) => edge.node.is_primary
    )?.node.image_url;

    return (
        <Layout>
            <div className="mb-8">
                {/* 이미지 헤더 */}
                <div className="w-full h-80 rounded-lg mb-4 shadow-md overflow-hidden">
                    {mainImage ? (
                        <Image
                            src={mainImage}
                            alt={`${restaurant.name} 메인 이미지`}
                            className="w-full h-full object-cover"
                            width={1200}
                            height={400}
                        />
                    ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                            <div className="text-gray-600 text-xl">이미지 없음</div>
                        </div>
                    )}
                </div>
            </div>

            {/* 레스토랑 정보 섹션 */}
            <div className="flex flex-col md:flex-row gap-8">
                {/* 왼쪽 컬럼 - 기본 정보 */}
                <div className="md:w-2/3">
                    <div className="flex justify-between items-start mb-4">
                        <h1 className="text-3xl font-bold">{restaurant.name}</h1>
                        <div className="flex items-center gap-2">
                            {restaurant.rating && (
                                <span className="bg-indigo-600 text-white px-2 py-1 rounded-md font-bold">
                                    {restaurant.rating}
                                </span>
                            )}
                            {restaurant.priceRange && <span className="text-gray-500">{restaurant.priceRange}</span>}
                        </div>
                    </div>

                    {/* 예약하기 버튼 */}
                    <div className="my-6">
                        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-medium transition duration-200">
                            예약하기
                        </button>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {restaurant.cuisine_type && (
                            <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                                {restaurant.cuisine_type}
                            </span>
                        )}
                    </div>

                    <div className="mb-6">
                        <p className="text-gray-700 mb-4">{restaurant.description}</p>
                    </div>

                    {/* 인기 메뉴 - 데이터가 있는 경우에만 표시 */}
                    {restaurant.popularDishes && restaurant.popularDishes.length > 0 && (
                        <div className="mb-6">
                            <h2 className="text-xl font-semibold mb-3 text-gray-800 border-b border-gray-200 pb-2">
                                인기 메뉴
                            </h2>
                            <div className="grid grid-cols-2 gap-4">
                                {restaurant.popularDishes.map((dish, index) => (
                                    <div key={index} className="flex gap-3 items-center">
                                        {/* 메뉴 이미지 임시 처리 */}
                                        <div className="w-16 h-16 bg-gray-100 rounded-md flex items-center justify-center">
                                            <span className="text-xs text-gray-500">사진</span>
                                        </div>
                                        <span className="font-medium">{dish}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* 오른쪽 컬럼 - 부가 정보 */}
                    <div className="md:w-1/3">
                        <div className="bg-white p-6 border border-gray-100 rounded-lg shadow-sm mb-6 hover:shadow-md transition-shadow">
                            <h2 className="text-lg font-semibold mb-4 text-gray-800 border-b border-gray-200 pb-2">
                                식당 정보
                            </h2>

                            <div className="space-y-3">
                                <div className="flex items-start">
                                    <span className="w-24 text-gray-500">주소</span>
                                    <span>{restaurant.address}</span>
                                </div>

                                <div className="flex items-start">
                                    <span className="w-24 text-gray-500">영업시간</span>
                                    <span>
                                        {restaurant.opening_hours} - {restaurant.closing_hours}
                                    </span>
                                </div>

                                <div className="flex items-start">
                                    <span className="w-24 text-gray-500">전화번호</span>
                                    <span>{restaurant.phone || '정보 없음'}</span>
                                </div>
                            </div>

                            <div className="mt-4">
                                {/* 지도 자리 (임시 div로 처리) */}
                                <div className="w-full h-40 bg-gray-100 rounded-md flex items-center justify-center">
                                    <span className="text-gray-500">지도</span>
                                </div>
                            </div>
                        </div>
                        {/* 편의 시설 - 데이터가 있는 경우에만 표시 */}
                        {restaurant.facilities && restaurant.facilities.length > 0 && (
                            <div className="bg-white p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <h2 className="text-lg font-semibold mb-4 text-gray-800 border-b border-gray-200 pb-2">
                                    편의 시설
                                </h2>
                                <div className="flex flex-wrap gap-2">
                                    {restaurant.facilities.map((facility, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                                        >
                                            {facility}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
};
