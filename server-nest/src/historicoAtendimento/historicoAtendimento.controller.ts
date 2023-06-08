import {
  Controller,
  Post,
  Body,
  Get,
  Req,
  Query,
  Param,
} from '@nestjs/common';
import { HistoricoAtendimentoService } from './historicoAtendimento.service';

type BodyType = {
  userId: number
}

@Controller('historicoAtendimento')
export class HistoricoAtendimentoController {
  constructor(private readonly HistoricoAtendimentoService: HistoricoAtendimentoService) { }


  
  @Get()
  async getAllHistorico(@Req() req: Request, @Body() body: any) {
    const userId = req['user'].id;
    const response = await this.HistoricoAtendimentoService.getAllHistorico(+userId)
    return response
  }
  @Get(':protocoloId')
  async getHistoricoById(@Req() req: Request, @Param('protocoloId') protocoloId: string) {
    const userId = req['user'].id;
    const response = await this.HistoricoAtendimentoService.getHistoricoById(+protocoloId, +userId)
    return response
  }

  @Post('')
  async newHistoricoAtendimento(@Body() body: BodyType) {

  }

}