import { MusicEntity } from "@/core/entities/music";

export abstract class AbstractMusicRepository {
  abstract create(MusicData: MusicEntity): Promise<MusicEntity>;
  abstract findById(id: string): Promise<MusicEntity | undefined>;
  abstract findByAuthor(author: string): Promise<MusicEntity | undefined>;
  abstract findByLetter(letter: string): Promise<MusicEntity | undefined>;
  abstract update(Music: MusicEntity): Promise<void>;
}