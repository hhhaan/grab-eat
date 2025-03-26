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

export const GET_RESTAURANT_BY_ID = gql`
    query GetRestaurantById($id: Int!) {
        restaurantCollection(filter: { id: { eq: $id } }) {
            edges {
                node {
                    id
                    name
                    description
                    cuisine_type
                    address
                    opening_hours
                    closing_hours

                    restaurant_imageCollection {
                        edges {
                            node {
                                id
                                image_url
                                image_description
                                is_primary
                            }
                        }
                    }
                }
            }
        }
    }
`;
