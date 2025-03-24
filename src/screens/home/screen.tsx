'use client';

import { Layout } from '@/src/widgets/layout';
import { gql, useQuery } from '@apollo/client';

const GET_RESTAURANTS = gql`
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

export function HomeScreen() {
    const { data, loading, error } = useQuery(GET_RESTAURANTS);
    console.log(data);
    return (
        <Layout>
            <div>HomeScreen</div>
        </Layout>
    );
}
