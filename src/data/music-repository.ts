import fs from 'fs';
import path from 'path';

interface MusicModel {
    artistName: string;
    music: string;
    videoId: string;
    categories: string[];
}

const pathData = path.join(__dirname, "../data/music.json");

export const repositoryMusic = 
async(artistName?: string):Promise<MusicModel[]> =>{
    const language = "utf-8"
    const rawdata = fs.readFileSync(pathData, language);
    let jsonFIle = JSON.parse(rawdata);

    if(artistName){
        jsonFIle = jsonFIle.filter((music: MusicModel ) => music.artistName === artistName);
    }
    return jsonFIle;
}