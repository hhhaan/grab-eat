import { gql } from '@apollo/client';

export const GET_RESTAURANTS = gql`
    query GetRestaurants {
        restaurantCollection(first: 10) {
            edges {
                node {
                    id
                    name
                    description
                    cuisine_type
                    restaurant_imageCollection {
                        edges {
                            node {
                                image_url
                            }
                        }
                    }
                }
            }
        }
    }
`;
