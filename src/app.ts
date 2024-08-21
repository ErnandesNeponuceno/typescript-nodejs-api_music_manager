import {getFilterMusic, getListMusic} from './controllers/music-controller';
import { Routes } from "./routers/routes";
import { httpMethod } from "./utils/http-methods";
import * as http from "http";

export const app = async(req: http.IncomingMessage, res: http.ServerResponse)=>{
    
    const baseUrl = req.url?.split("?")[0];
    
    if(req.method === httpMethod.GET && baseUrl === Routes.List ){
        await getListMusic(req, res);
    }
    if(req.method === httpMethod.GET && baseUrl === Routes.Music){
        await getFilterMusic(req, res);
    }
}