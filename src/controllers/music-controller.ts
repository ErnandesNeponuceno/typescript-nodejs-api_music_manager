import {IncomingMessage, ServerResponse} from 'http';
import {serviceListMusic} from '../services/list-music-service'
import { serviceFilterMusic } from '../services/filter-music-service';
import { FilterMusicModel } from '../models/filter-music-models';

const defaltContent = {'Content-Type': 'application/json'};

export const getListMusic = async (req: IncomingMessage, res: ServerResponse)=>{
    const content: FilterMusicModel = await serviceListMusic();
    res.writeHead(content.statusCode, defaltContent);
    res.write(JSON.stringify(content.body))
    res.end();
};

export const getFilterMusic = async(req: IncomingMessage, res: ServerResponse) => {
    const content: FilterMusicModel = await serviceFilterMusic(req.url);
    res.writeHead(content.statusCode, defaltContent);
    res.write(JSON.stringify(content.body))
    res.end();
};