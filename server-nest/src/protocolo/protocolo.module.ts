import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { ProtocoloController } from './Protocolo.controller';
import { ProtocoloService } from './Protocolo.service';
import { Protocolo } from './Protocolo.entity';
import { User } from 'src/user/user.entity';

@Module({
  imports: [MikroOrmModule.forFeature([Protocolo, User])],
  controllers: [ProtocoloController],
  providers: [ProtocoloService],
})
export class ProtocoloModule {}