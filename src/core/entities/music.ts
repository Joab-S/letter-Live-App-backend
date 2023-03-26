import { Entity } from "./entity";

export class MusicEntity extends Entity {
  id: string;
  author: string;
  title: string;
  letter: string;

  constructor ({
    id,
    author,
    title,
    letter,
  }: {
    id: string,
    author: string,
    title: string,
    letter: string,
  }) {
    super(id);
    this.author = author;
    this.title = title;
    this.letter = letter;
  }

  public static create({
    id,
    author,
    title,
    letter,
  }: {
    id?: string,
    author: string,
    title: string,
    letter: string,
  }) {
    const music = new MusicEntity({
      id,
      author,
      title,
      letter,
    });
    return music;
  }

  public static update(
    music: MusicEntity,
    {
      author,
      title,
      letter,
    }: {
      author: string,
      title: string,
      letter: string,
    }) {
      music.author = author;
      music.title = title;
      music.letter = letter;
    }
}