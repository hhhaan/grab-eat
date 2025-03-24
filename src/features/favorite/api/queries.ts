import { gql } from '@apollo/client';

export const GET_FAVORITES = gql`
    query GetFavorites {
        favoritesCollection {
            edges {
                node {
                    id
                    user_id
                    restaurant_id
                }
            }
        }
    }
`;

// 즐겨찾기 추가 뮤테이션
export const ADD_FAVORITE = gql`
    mutation AddFavorite($userId: UUID!, $restaurantId: Int!) {
        insertIntofavoritesCollection(objects: [{ user_id: $userId, restaurant_id: $restaurantId }]) {
            records {
                id
                restaurant_id
            }
        }
    }
`;

// 즐겨찾기 삭제 뮤테이션
export const REMOVE_FAVORITE = gql`
    mutation RemoveFavorite($userId: UUID!, $restaurantId: Int!) {
        deleteFromfavoritesCollection(filter: { user_id: { eq: $userId }, restaurant_id: { eq: $restaurantId } }) {
            affectedCount
        }
    }
`;
