import * as path from 'path';
import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ProtocoloModule } from './protocolo/protocolo.module';
import { MensagensModule } from './mensagens/mensagens.module';
import { IniciarBotModule } from './iniciarBot/iniciarBot.module';
import { HistoricoAtendimentoModule } from './historicoAtendimento/historicoAtendimento.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '..', 'public'),
    }),
    MikroOrmModule.forRoot(),
    ConfigModule.forRoot(),
    UserModule,
    AuthModule,
    UserModule,
    ProtocoloModule,
    MensagensModule,
    IniciarBotModule, 
    HistoricoAtendimentoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }