import { Schema, model } from "mongoose";

import { Product, ProductWithStatic } from "./products.interface";



const productSchema = new Schema<Product, ProductWithStatic>(
    {
        image: { type: String, required: true },
        name: { type: String, required: true },
        brand: { type: String, required: true },
        categories: { type: String, required: true },
        price: { type: Number, required: true },
        flashSale: { type: Boolean, required: true },
        isNew: { type: Boolean, required: true },
        descriptionMini: { type: String, required: true },
        description: { type: String, required: true },
        review: { type: Number, required: true },
        rating: { type: Number, required: true },
        tag: { type: String, required: true },
        isDeleted: { type: Boolean, default: false }
    }
);


//Query middle wears
productSchema.pre('find', function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
});
productSchema.pre('findOne', function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
});
// the single value wont be available by aggregate by..aggregate works on pipeline
productSchema.pre('aggregate', function (next) {
    this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } }); // if not equal = true , don't come
    next();
});

// NEW STATIC METHOD
productSchema.statics.isUserExists = async function (name: string): Promise<Product | null> {
    const existingUser = await this.findOne({ name: name });
    return existingUser;
};
const ProductModel = model<Product, ProductWithStatic>('productData', productSchema);

export default ProductModel;