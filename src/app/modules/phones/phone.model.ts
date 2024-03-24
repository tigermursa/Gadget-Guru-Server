import { Schema, model } from "mongoose";
import { Phone, PhoneWithStatic } from "./phone.interface";



const phoneSchema = new Schema<Phone, PhoneWithStatic>(
    {
        image: { type: String, required: true },
        name: { type: String, required: true },
        brand: { type: String, required: true },
        categories: { type: String, required: true },
        price: { type: Number, required: true },
        flashSale: { type: Boolean, default: false },
        isNew: { type: Boolean, default: false },
        descriptionMini: { type: String, required: true },
        description: { type: String, required: true },
        review: { type: Number, required: true },
        rating: { type: Number, required: true },
        priceV1: { type: String, required: true },
        ramV1: { type: String, required: true },
        priceV2: { type: String, required: true },
        ramV2: { type: String, required: true },
        tag: { type: String, default: "New" },
        // fullSpec: {
        //     type: {
        //         operatingSystem: { type: String, required: true },
        //         processor: { type: String, required: true },
        //         display: { type: String, required: true },
        //         cameras: {
        //             type: {
        //                 main: { type: String, required: true },
        //                 ultraWide: { type: String, required: true },
        //                 macro: { type: String, required: true },
        //                 depth: { type: String, required: true }
        //             },
        //             required: true
        //         },
        //         battery: { type: String, required: true },
        //         charging: { type: String, required: true },
        //         dimensions: { type: String, required: true },
        //         weight: { type: String, required: true },
        //         colors: { type: [String], required: true }
        //     },
        //     required: true
        // },
        isDeleted: { type: Boolean, default: false }
    }
);


//Query middle wears
phoneSchema.pre('find', function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
});
phoneSchema.pre('findOne', function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
});
// the single value wont be available by aggregate by..aggregate works on pipeline
phoneSchema.pre('aggregate', function (next) {
    this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } }); // if not equal = true , don't come
    next();
});

// NEW STATIC METHOD
phoneSchema.statics.isUserExists = async function (name: string): Promise<Phone | null> {
    const existingUser = await this.findOne({ name: name });
    return existingUser;
};
const PhoneModel = model<Phone, PhoneWithStatic>('phoneData', phoneSchema);

export default PhoneModel;