import express, { Request, Response, Router } from "express";
import { handleHttp } from "./error.handle";
import { Sub } from "./sub.interface";
import SubModel from "./sub.model";

const router = Router();

const getSubs = async() => {
    const responseItem=await SubModel.find({});
    return responseItem;
};

const postSub = async(item: Sub) => {
    const responseInsert = await SubModel.create(item);
    return responseInsert;
};


router.get('/', async (req: Request,res: Response) => {
    try{
        console.log("hola");
        const response = await getSubs();
        res.send(response);
    } catch(e){
        console.log("adeu");
        handleHttp(res,"ERROR_GET_SUBJECT");
    }
})

router.post('/', async ({body}:Request,res:Response) => {
    try{
        const responsePerson=await postSub(body);
        res.send(responsePerson);
    }catch(e){
        handleHttp(res,"ERROR_POST_USER");
    }
})

export { router };

