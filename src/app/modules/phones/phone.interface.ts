import { Model } from "mongoose";



export interface PhoneWithStatic extends Model<Phone> {
    isUserExists(id: string): Promise<Phone | null>;
}

export type Phone = {
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
    priceV1: string;
    ramV1: string;
    priceV2: string;
    ramV2: string;
    tag: string;
    // fullSpec: {
    //     operatingSystem: string;
    //     processor: string;
    //     display: string;
    //     cameras: {
    //         main: string;
    //         ultraWide: string;
    //         macro: string;
    //         depth: string;
    //     };
    //     battery: string;
    //     charging: string;
    //     dimensions: string;
    //     weight: string;
    //     colors: string[];
    // };
    isDeleted?: boolean;
};







