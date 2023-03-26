import { Body, Controller, HttpCode, Param, Put, ValidationPipe } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { SetStreamMessageDto } from "../dto/set-stream-message.dto";
import { SetStreamMusicService } from "../usecases/set-stream-music.service";

@ApiTags('Stream Music')
@Controller('/stream-message')
export class SetStreamMusicController {
  constructor(
    private readonly streamMusicService: SetStreamMusicService,
  ) {}

  @Put(':connectionCode')
  @ApiOperation({
    summary: '...',
  })
  @ApiResponse({ status: 204 })
  @HttpCode(204)
  async SetStreamMusic(
    @Param('connectionCode') connectionCode: string,
    @Body(ValidationPipe) input: SetStreamMessageDto,
  ): Promise<void> {
    await this.streamMusicService.execute(connectionCode, input);
  }
}
