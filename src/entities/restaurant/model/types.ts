export interface RestaurantNode {
    id: number;
    name: string;
    description: string;
    cuisine_type: string;
    restaurant_imageCollection: {
        edges: Array<{
            node: {
                image_url: string;
            };
        }>;
    };
}
