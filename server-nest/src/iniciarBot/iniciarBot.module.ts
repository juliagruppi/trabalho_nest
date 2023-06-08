import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { IniciarBotController } from './iniciarBot.controller';
import { IniciarBotService } from './iniciarBot.service';
import { IniciarBot } from './iniciarBot.entity';
import { ProtocoloService } from 'src/protocolo/Protocolo.service';
import { Protocolo } from 'src/protocolo/protocolo.entity';
import { User } from 'src/user/user.entity';
import { MensagensService } from 'src/mensagens/mensagens.service';
import { Mensagens } from 'src/mensagens/mensagens.entity';
import { HistoricoAtendimento } from 'src/historicoAtendimento/historicoAtendimento.entity';
import { MensagensAutomaticas } from 'src/mensagensAutomaticas/mensagensAutomaticas.entity';
import { HistoricoAtendimentoService } from 'src/historicoAtendimento/historicoAtendimento.service';

@Module({
  imports: [MikroOrmModule.forFeature([IniciarBot, Protocolo, User, Mensagens, MensagensAutomaticas, HistoricoAtendimento])],
  controllers: [IniciarBotController],
  providers: [IniciarBotService, ProtocoloService, MensagensService, HistoricoAtendimentoService],
})
export class IniciarBotModule {}