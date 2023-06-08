import {
  Controller,
  Get,
  UseGuards,
  Req,
  Request,
  Post,
  UseInterceptors,
  UploadedFile,
  Param,
  Query,
  Body,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ProtocoloService } from './Protocolo.service';
import { ProtocoloQueryDto } from './dto/protocoloQuery.dto';



@Controller('protocolo')
export class ProtocoloController {
  constructor(private readonly protocoloService: ProtocoloService) { }

  @Get()
  async getAllProtocolos(@Req() req: Request, @Query() query: ProtocoloQueryDto) {
    const userId = req['user'].id;
    const response = await this.protocoloService.findAllProtocolos(+userId, query)
    return response
  }
  @Post('')
  async newProtocolo(@Body() body: any) {
    const response = await this.protocoloService.newProtocolo(body.userId)
  }

}