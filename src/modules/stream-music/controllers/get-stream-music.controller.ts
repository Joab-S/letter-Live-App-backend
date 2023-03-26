import { Body, Controller, Get, HttpCode, Param, Res, ValidationPipe } from "@nestjs/common";
import { Response } from 'express';
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { GetStreamMusicService } from "../usecases/get-stream-music.service";
import { StreamMessageGateway } from "@/modules/websocket/websocket.gateway";
import { Server } from 'socket.io';

@ApiTags('Stream Music')
@Controller('/stream-message')
export class GetStreamMusicController {
  constructor(
    private readonly getStreamMusicService: GetStreamMusicService,
    private readonly streamMessageGateway: StreamMessageGateway,
  ) {}

  @Get(':connectionCode')
  @ApiOperation({
    summary: '...',
  })
  @ApiResponse({ status: 200 })
  @HttpCode(200)
  async streamMusic(
    @Param('connectionCode') connectionCode: string,
  ): Promise<{ message: string, code: string }> {
    const message = await this.getStreamMusicService.execute(connectionCode);
    return { message, code: connectionCode };
  }

  @Get('/letter/:connectionCode')
  async renderLetter(
    @Param('connectionCode') connectionCode: string,
    @Res() res: Response
  ): Promise<void> {
    res.render(
      'letter', {
        layout: 'letter.hbs',
        code: connectionCode,
      });
  }
}
