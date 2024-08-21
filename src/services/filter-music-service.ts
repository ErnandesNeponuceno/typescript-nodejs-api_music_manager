import { repositoryMusic } from "../data/music-repository"
import { FilterMusicModel } from "../models/filter-music-models";
import { statusCode } from "../utils/status-code";

export const serviceFilterMusic = async(musicName: string | undefined): Promise<FilterMusicModel>=>{

    let responseFormat: FilterMusicModel = {
        statusCode: 0,
        body: [],
    }

    const queryString = musicName?.split("?a=")[1] || "";
    const data = await repositoryMusic(queryString);
    responseFormat.statusCode = data.length !== 0 ? statusCode.OK : statusCode.NO_CONTENT;
    responseFormat.body = data;
    return responseFormat;
}