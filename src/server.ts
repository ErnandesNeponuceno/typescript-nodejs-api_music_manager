import * as http from "http";
import {getFilterMusic, getListMusic} from './controllers/music-controller';
import { Routes } from "./routers/routes";
import { httpMethod } from "./utils/http-methods";

const server = http.createServer( async (req: http.IncomingMessage, res: http.ServerResponse) => {
    
    const [baseUrl, queryString] = req.url?.split("?") ?? ["", ""];
    
    if(req.method === httpMethod.GET && baseUrl === Routes.List ){
        await getListMusic(req, res);
    }
    if(req.method === httpMethod.GET && baseUrl === Routes.Music){
        await getFilterMusic(req, res);
    }
});

const port = process.env.PORT;

server.listen(port, ()=>{
    console.log(`servidor iniciado na porta ${port}`)
})