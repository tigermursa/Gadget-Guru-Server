import { z } from "zod";

const PhoneValidationZodSchema = z.object({
    image: z.string(),
    name: z.string(),
    brand: z.string(),
    categories: z.string(),
    price: z.number(),
    flashSale: z.boolean(),
    isNew: z.boolean(),
    descriptionMini: z.string(),
    description: z.string(),
    review: z.number(),
    rating: z.number(),
    priceV1: z.string(),
    ramV1: z.string(),
    priceV2: z.string(),
    ramV2: z.string(),
    tag: z.string(),
    fullSpec: z.object({
        operatingSystem: z.string(),
        processor: z.string(),
        display: z.string(),
        cameras: z.object({
            main: z.string(),
            ultraWide: z.string(),
            macro: z.string(),
            depth: z.string(),
        }),
        battery: z.string(),
        charging: z.string(),
        dimensions: z.string(),
        weight: z.string(),
        colors: z.array(z.string()),
    }),
    isDeleted: z.boolean().default(false),
});

export default PhoneValidationZodSchema;
