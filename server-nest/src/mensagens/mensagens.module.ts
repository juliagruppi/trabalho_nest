import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { Mensagens } from './mensagens.entity';
import { MensagensController } from './mensagens.controller';
import { MensagensService } from './mensagens.service';
import { MensagensAutomaticas } from 'src/mensagensAutomaticas/mensagensAutomaticas.entity';
import { ProtocoloService } from 'src/protocolo/Protocolo.service';
import { HistoricoAtendimentoService } from 'src/historicoAtendimento/historicoAtendimento.service';
import { HistoricoAtendimento } from 'src/historicoAtendimento/historicoAtendimento.entity';
import { Protocolo } from 'src/protocolo/protocolo.entity';
import { User } from 'src/user/user.entity';

@Module({
  imports: [MikroOrmModule.forFeature([Mensagens, MensagensAutomaticas, HistoricoAtendimento, Protocolo, User])],
  controllers: [MensagensController],
  providers: [MensagensService, ProtocoloService, HistoricoAtendimentoService],
})
export class MensagensModule {}