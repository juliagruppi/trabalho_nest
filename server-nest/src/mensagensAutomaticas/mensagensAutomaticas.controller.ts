import {
    Controller,
    Get,
    UseGuards,
    Req,
    Request,
    Post,
    UseInterceptors,
    UploadedFile,
  } from '@nestjs/common';
  import { FileInterceptor } from '@nestjs/platform-express';
import { MensagensAutomaticasService } from './mensagensAutomaticas.service';

  
  @Controller('mensagens')
  export class MensagensAutomaticasController {
    constructor(private readonly MensagensAutomaticasService: MensagensAutomaticasService) {}

    @Get('')
    async getMensagens() {
        
    }
  
  }