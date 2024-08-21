import { repositoryMusic } from "../data/music-repository";
import { FilterMusicModel } from "../models/filter-music-models";
import { statusCode } from "../utils/status-code";

export const serviceListMusic = async (): Promise<FilterMusicModel>=>{
    let responseFormat: FilterMusicModel = {
        statusCode: 0,
        body: [],
    }

    const data = await repositoryMusic();
    responseFormat = {
        statusCode: data.length !== 0 ? statusCode.OK : statusCode.NO_CONTENT,
        body: data,
    }

    return responseFormat;
}