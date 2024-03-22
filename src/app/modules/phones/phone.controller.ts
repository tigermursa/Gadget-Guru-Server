
import { Request, Response } from "express";

import PhoneValidationZodSchema from "./phone.validation";
import { PhoneServices } from "./phone.services";

const createPhone = async (req: Request, res: Response) => {
    try {
        //data will come
        const sites = req.body;
        //will call services 
        const zodErrorData = PhoneValidationZodSchema.parse(sites);
        const result = await PhoneServices.createPhoneIntoDB(zodErrorData);
        //sending response 
        res.status(200).json({
            success: true,
            message: "Phone data created successfully !",
            data: result,
        })
    } catch (err: any) {
        res.status(200).json({
            success: false,
            message: "something went wrong into the input data !",
            error: err.message,
        })
    }
};


const getAllPhones = async (req: Request, res: Response) => {
    try {
        const result = await PhoneServices.getAllPhoneFromDB()
        //sending response 
        res.status(200).json({
            success: true,
            message: "Phone data reading all success",
            data: result,
        })
    } catch (error: any) {
        res.status(500).json({
            success: true,
            message: "something went wrong ! ",
            error: error.message,
        })
    }
};


const getSinglePhone = async (req: Request, res: Response) => {
    try {
        const siteId = req.params.studentId;
        const result = await PhoneServices.getSinglePhoneFromDB(siteId);
        //sending response 
        res.status(200).json({
            success: true,
            message: "Single Phone data reading success ",
            data: result,
        })
    } catch (error: any) {
        res.status(500).json({
            success: true,
            message: "something went wrong ! ",
            error: error.message,
        })
    }
}

const deletePhone = async (req: Request, res: Response) => {
    try {
        const siteId = req.params.studentId;
        const result = await PhoneServices.deletePhoneFromDB(siteId);
        //sending response 
        res.status(200).json({
            success: true,
            message: "Phone deleted successfully!",
            data: result,
        })
    } catch (error: any) {
        res.status(500).json({
            success: true,
            message: "something went wrong ! ",
            error: error.message,
        })
    }
}


//update 
const updatePhone = async (req: Request, res: Response) => {
    try {
        const siteId = req.params.studentId;
        const updatedData = req.body; // Assuming the updated data is present in the request body
        const result = await PhoneServices.updatePhoneFromDB(siteId, updatedData);
        //sending response 
        res.status(200).json({
            success: true,
            message: "Phone data updated successfully",
            data: result,
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: "Something went wrong while updating the Phone data",
            error: error.message,
        });
    }
};



export const PhoneController = {
    createPhone,
    getAllPhones,
    getSinglePhone,
    updatePhone,
    deletePhone
}