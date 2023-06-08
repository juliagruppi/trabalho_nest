import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { HistoricoAtendimento } from './historicoAtendimento.entity';
import { HistoricoAtendimentoController } from './historicoAtendimento.controller';
import { HistoricoAtendimentoService } from './historicoAtendimento.service';
import { MensagensAutomaticas } from 'src/mensagensAutomaticas/mensagensAutomaticas.entity';
import { Mensagens } from 'src/mensagens/mensagens.entity';
import { User } from 'src/user/user.entity';
import { Protocolo } from 'src/protocolo/protocolo.entity';

@Module({
  imports: [MikroOrmModule.forFeature([Protocolo, User, Mensagens, MensagensAutomaticas, HistoricoAtendimento])],
  controllers: [HistoricoAtendimentoController],
  providers: [HistoricoAtendimentoService],
})
export class HistoricoAtendimentoModule {}