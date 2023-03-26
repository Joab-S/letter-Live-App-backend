import { Body, Controller, Post, ValidationPipe } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateMusicDto } from "../dto/create-music.dto";
import { CreateMusicService } from "../usecases/create-music.service";

@ApiTags('Music')
@Controller('musics')
export class CreateMusicController {
  constructor(
    private readonly createMusicService: CreateMusicService,
  ) {}

  @Post('')
  async createMusic(
    @Body(ValidationPipe) createMusicDto: CreateMusicDto,
  ): Promise<void> {
    await this.createMusicService.execute(
      {
        ...createMusicDto,
      }
    );
  }
}