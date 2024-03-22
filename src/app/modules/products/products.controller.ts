
import { Request, Response } from "express";
import ProductValidationZodSchema from "./products.validation";
import { ProductServices } from "./products.services";

const createProduct = async (req: Request, res: Response) => {
    try {
        //data will come
        const sites = req.body;
        //will call services 
        const zodErrorData = ProductValidationZodSchema.parse(sites);
        const result = await ProductServices.createProductIntoDB(zodErrorData);
        //sending response 
        res.status(200).json({
            success: true,
            message: "Product data created successfully !",
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


const getAllProduct = async (req: Request, res: Response) => {
    try {
        const result = await ProductServices.getAllProductFromDB()
        //sending response 
        res.status(200).json({
            success: true,
            message: "Product data reading all success",
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


const getSingleProduct = async (req: Request, res: Response) => {
    try {
        const siteId = req.params.studentId;
        const result = await ProductServices.getSingleProductFromDB(siteId);
        //sending response 
        res.status(200).json({
            success: true,
            message: "Single Product data reading success ",
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

const deleteProduct = async (req: Request, res: Response) => {
    try {
        const siteId = req.params.studentId;
        const result = await ProductServices.deleteProductFromDB(siteId);
        //sending response 
        res.status(200).json({
            success: true,
            message: "Product deleted successfully!",
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
const updateProduct = async (req: Request, res: Response) => {
    try {
        const siteId = req.params.studentId;
        const updatedData = req.body; // Assuming the updated data is present in the request body
        const result = await ProductServices.updateProductFromDB(siteId, updatedData);
        //sending response 
        res.status(200).json({
            success: true,
            message: "Product data updated successfully",
            data: result,
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: "Something went wrong while updating the Product data",
            error: error.message,
        });
    }
};



export const PhoneController = {
    createProduct,
    getAllProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct
}