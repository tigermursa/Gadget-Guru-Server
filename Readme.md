# Gadget-Guru-Server

## Live Hosted Url

[Live Hosted API](https://gadget-guru-server-rho.vercel.app)

## About

Gadget-Guru-Server is a RESTful API server designed to facilitate the management of phones and products. It provides intuitive endpoints for creating, retrieving, updating, and deleting phone and product data.

## API Endpoints

### Phones

- **Create Phone**:

  - **Method:** POST
  - **Endpoint:** `/api/v1/phone/create`
  - **Controller:** `PhoneController.createPhone`

- **Get All Phones**:

  - **Method:** GET
  - **Endpoint:** `/api/v1/phone/get`
  - **Controller:** `PhoneController.getAllPhones`

- **Get Single Phone**:

  - **Method:** GET
  - **Endpoint:** `/api/v1/phone/:id`
  - **Controller:** `PhoneController.getSinglePhone`

- **Delete Phone**:

  - **Method:** DELETE
  - **Endpoint:** `/api/v1/phone/:id`
  - **Controller:** `PhoneController.deletePhone`

- **Update Phone**:
  - **Method:** PATCH
  - **Endpoint:** `/api/v1/phone/:id`
  - **Controller:** `PhoneController.updatePhone`

### Products

- **Create Product**:

  - **Method:** POST
  - **Endpoint:** `/api/v1/product/create`
  - **Controller:** `ProductController.createProduct`

- **Get All Products**:

  - **Method:** GET
  - **Endpoint:** `/api/v1/product/get`
  - **Controller:** `ProductController.getAllProduct`

- **Get Single Product**:

  - **Method:** GET
  - **Endpoint:** `/api/v1/product/:id`
  - **Controller:** `ProductController.getSingleProduct`

- **Delete Product**:

  - **Method:** DELETE
  - **Endpoint:** `/api/v1/product/:id`
  - **Controller:** `ProductController.deleteProduct`

- **Update Product**:
  - **Method:** PATCH
  - **Endpoint:** `/api/v1/product/:id`
  - **Controller:** `ProductController.updateProduct`

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

## Getting Started

#### you can clone the project and type npm install and npm run dev to start the server into your local 

