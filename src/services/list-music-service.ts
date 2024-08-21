import { repositoryMusic } from "../data/music-repository";


export const serviceListMusic = async ()=>{
    const data = await repositoryMusic();
    return data;
}