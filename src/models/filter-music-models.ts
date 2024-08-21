import { MusicModel } from "../data/music-repository";

export interface FilterMusicModel {
    statusCode: number;
    body: MusicModel[];
}