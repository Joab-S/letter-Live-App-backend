import { Entity } from "./entity";

export class UserEntity extends Entity {
  id: string;
  name: string;
  email: string;
  password: string;

  constructor ({
    id,
    name,
    email,
    password
  }: {
    id: string,
    name: string,
    email: string,
    password: string
  }) {
    super(id);
    this.name = name;
    this.email = email;
    this.password = password;
  }

  public static create({
    id,
    name,
    email,
    password
  }: {
    id: string,
    name: string,
    email: string,
    password: string
  }) {
    const user = new UserEntity({
      id,
      name,
      email,
      password
    });
    return user;
  }

  public static update(
    user: UserEntity,
    {
      name,
      email,
      password
    }: {
      name: string,
      email: string,
      password: string
    }) {
      user.name = name;
      user.email = email;
      user.password = password;
    }

  static validatePassword(password: string): boolean {
    const capitalLetters = /[A-Z]/;
    const smallLetters = /[a-z]/;
    const numbers = /[0-9]/;
    const specialCharacters = /[!|@|#|$|%|^|&|*|(|)|-|_]/;

    if (!capitalLetters.test(password)) {
      return false;
    }
    if (!smallLetters.test(password)) {
      return false;
    }
    if (!numbers.test(password)) {
      return false;
    }
    if (!specialCharacters.test(password)) {
      return false;
    }
    if (!(password.length >= 8)) {
      return false;
    }

    return true;
  }
  
}