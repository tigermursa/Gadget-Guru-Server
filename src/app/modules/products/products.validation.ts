import { z } from "zod";

const ProductValidationZodSchema = z.object({
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
    tag: z.string(),
    isDeleted: z.boolean().default(false),
});

export default ProductValidationZodSchema;
