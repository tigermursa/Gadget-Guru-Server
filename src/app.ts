import express from "express";
import cors from "cors";
import { PhoneRoutes } from "./app/modules/phones/phone.route";

const app = express();

// Parsers
app.use(express.json());  // JSON parse will happen
app.use(cors());

// Application routes place:
app.use('/api/v1/phone', PhoneRoutes);
app.use('/api/v2/product', PhoneRoutes);

app.get('/', (req, res) => {
    res.send(
        `<div style="background-color: black; color: green; height: 98vh; display: flex; align-items: center; justify-content: center; padding:0; margin:0;">
            <h1>Welcome to the GadgetGuru server </h1>
        </div>`
    );
});


export default app;
