import {
  Controller,
  Get,
  UseGuards,
  Req,
  Request,
  Post,
  UseInterceptors,
  UploadedFile,
  Body,
  Delete,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { MensagensService } from './mensagens.service';
import { newMensagemDto } from './dto/newMensagem.dto';

@Controller('mensagens')
export class MensagensController {
  constructor(private readonly mensagensService: MensagensService) { }

  @Get()
  async getMensagens() {
    return await this.mensagensService.getTodasMensagens()
  }

  @Post()
  async interactBot(@Body() body: newMensagemDto) {
    return await this.mensagensService.interactBot(body.mensagemUsuario, body.protocoloId)
  }

  @Delete()
  async deleteTodasMensagens() {
    return await this.mensagensService.deleteTodasMensagens()
  }

}