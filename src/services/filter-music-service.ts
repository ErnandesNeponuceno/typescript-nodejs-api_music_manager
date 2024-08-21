
import { repositoryMusic } from "../data/music-repository"

export const serviceFilterMusic = async(musicName: string | undefined)=>{
    const queryString = musicName?.split("?a=")[1] || "";
    const data = await repositoryMusic(queryString);
    return data;
}