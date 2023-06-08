import {
  Controller,
  Get,
  Query,
  Req,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { IniciarBotService } from './iniciarBot.service';

@Controller('iniciarBot')
export class IniciarBotController {
  constructor(private readonly IniciarBotService: IniciarBotService) { }

  @Get()
  async getIniciarBot(@Req() req: Request) {
    const userId = req['user'].id;
    const response = await this.IniciarBotService.iniciarBot(+userId)
    return response
  }

}