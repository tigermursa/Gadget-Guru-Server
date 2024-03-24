import { Model } from "mongoose";

export interface ProductWithStatic extends Model<Product> {
    isUserExists(id: string): Promise<Product | null>;
}





export type Product = {
    image: string;
    name: string;
    brand: string;
    categories: string;
    price: number;
    flashSale: boolean;
    isNew: boolean;
    descriptionMini: string;
    description: string;
    review: number;
    rating: number;
    tag: string;
    isDeleted?: boolean;
};







