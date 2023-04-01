import cors from "cors";
import "dotenv/config";
import express, { Request, Response, Router } from "express";
import db from "./mongo";
import { router } from "./routes";




const PORT = process.env.PORT || 3001;  
const app = express();
app.use(cors());
app.use(express.json());
app.use(router);


db().then(() => console.log("Connection is ready"));
app.listen(PORT, () => console.log(`Hey! Listening por el puerto ${PORT}`));
