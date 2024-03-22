import { ObjectId } from "mongoose";
import ProductModel from "./products.model";
import { Product } from "./products.interface";

//post
const createProductIntoDB = async (data: Product) => {
    if (await ProductModel.isUserExists(data.name)) {
        throw new Error("this  Product already exist");
    }
    const result = await ProductModel.create(data) //builtin static method
    return result;
}



// getAll
const getAllProductFromDB = async () => {
    const result = await ProductModel.find();
    return result;
}

// getSingle
const getSingleProductFromDB = async (id: string) => {
    const result = await ProductModel.findOne({ _id: id });
    return result;
}

// delete
const deleteProductFromDB = async (_id: string) => {
    const result = await ProductModel.updateOne({ _id }, { isDeleted: true });
    return result;
}

//update 
const updateProductFromDB = async (_id: string | ObjectId, updatedData: Partial<Product>) => {
    try {
        const result = await ProductModel.updateOne({ _id }, { $set: updatedData });
        return result;
    } catch (error: any) {
        console.error("Error updating Product:", error.message);
        throw new Error("Error updating Product: " + error.message);
    }
};





export const ProductServices = {
    createProductIntoDB,
    getAllProductFromDB,
    getSingleProductFromDB,
    updateProductFromDB,
    deleteProductFromDB
}