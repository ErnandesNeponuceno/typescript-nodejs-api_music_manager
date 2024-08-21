import * as http from "http";
import {getListMusic} from './controllers/music-controller';

const server = http.createServer( async (req: http.IncomingMessage, res: http.ServerResponse) => {
    if(req.method === "GET"){
        await getListMusic(req, res);
    }


});

const port = process.env.PORT;

server.listen(port, ()=>{
    console.log(`servidor iniciado na porta ${port}`)
})