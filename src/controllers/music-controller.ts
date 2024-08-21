import {IncomingMessage, ServerResponse} from 'http';
import {serviceListMusic} from '../services/list-music-service'
import { serviceFilterMusic } from '../services/filter-music-service';
import { statusCode } from '../utils/status-code';

export const getListMusic = async (req: IncomingMessage, res: ServerResponse)=>{
    const content = await serviceListMusic();
    res.writeHead(statusCode.OK, {'Content-Type': 'application/json'});
    res.end(
        JSON.stringify(content));
};

export const getFilterMusic = async(req: IncomingMessage, res: ServerResponse) => {
    const content = await serviceFilterMusic(req.url);
    res.writeHead(statusCode.OK, {'Content-Type': 'application/json'});
    res.end(
        JSON.stringify(content));
};