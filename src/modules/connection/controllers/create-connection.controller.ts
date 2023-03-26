import { Body, Controller, Post, ValidationPipe } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateConnectionService } from "../usecases/create-connection.service";

@ApiTags('Connection')
@Controller('connections')
export class CreateConnectionController {
  constructor(
    private readonly createConnectionService: CreateConnectionService,
  ) {}

  @Post('')
  async createMusic(
  ): Promise<string> {
    return await this.createConnectionService.execute(
    );
  }
}