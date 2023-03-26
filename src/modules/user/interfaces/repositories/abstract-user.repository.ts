import { UserEntity } from "@/core/entities/user";
import { QueryRunner } from "typeorm";

export abstract class AbstractUserRepository {
  abstract create(UserData: UserEntity): Promise<UserEntity>;
  abstract findById(id: string): Promise<UserEntity | undefined>;
  abstract update(User: UserEntity): Promise<void>;
}