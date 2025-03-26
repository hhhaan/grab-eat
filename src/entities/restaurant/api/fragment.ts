import { gql } from '@apollo/client';

export const RESTAURANT_BASIC_FIELDS = gql`
    fragment RestaurantBasicFields on Restaurant {
        id
        name
        description
        cuisine_type
    }
`;
