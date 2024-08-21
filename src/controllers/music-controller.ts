import {IncomingMessage, ServerResponse} from 'http';
import {serviceListMusic} from '../services/list-music-service'

export const getListMusic = async (req: IncomingMessage, res: ServerResponse)=>{
    
    const content = await serviceListMusic();
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(
        JSON.stringify(content)
);
};