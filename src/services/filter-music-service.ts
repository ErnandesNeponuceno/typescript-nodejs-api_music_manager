import { repositoryMusic } from "../data/music-repository"

export const serviceFilterMusic = async(musicName: string)=>{
    const data = await repositoryMusic(musicName);
    return data;
}