export interface FavoritesResult {
    favoritesCollection: {
        edges: {
            node: {
                id: number;
                user_id: string;
                restaurant_id: number;
            };
        }[];
    };
}
