import { ObjectId } from "mongoose";
import { Phone } from "./phone.interface";
import PhoneModel from "./phone.model";

//post
const createPhoneIntoDB = async (data: Phone) => {
    if (await PhoneModel.isUserExists(data.name)) {
        throw new Error("this  phone already exist");
    }
    const result = await PhoneModel.create(data) //builtin static method
    return result;
}





// getAll
const getAllPhoneFromDB = async () => {
    const result = await PhoneModel.find();
    return result;
}

// getSingle
const getSinglePhoneFromDB = async (id: string) => {
    const result = await PhoneModel.findOne({ _id: id });
    return result;
}

// delete
const deletePhoneFromDB = async (_id: string) => {
    const result = await PhoneModel.updateOne({ _id }, { isDeleted: true });
    return result;
}

//update 
const updatePhoneFromDB = async (_id: string | ObjectId, updatedData: Partial<Phone>) => {
    try {
        const result = await PhoneModel.updateOne({ _id }, { $set: updatedData });
        return result;
    } catch (error: any) {
        console.error("Error updating Phone:", error.message);
        throw new Error("Error updating Phone: " + error.message);
    }
};





export const PhoneServices = {
    createPhoneIntoDB,
    getAllPhoneFromDB,
    getSinglePhoneFromDB,
    updatePhoneFromDB,
    deletePhoneFromDB,
}