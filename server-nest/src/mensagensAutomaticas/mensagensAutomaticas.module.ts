import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { MensagensAutomaticasController } from './mensagensAutomaticas.controller';
import { MensagensAutomaticasService } from './mensagensAutomaticas.service';
import { MensagensAutomaticas } from './mensagensAutomaticas.entity';

@Module({
  imports: [MikroOrmModule.forFeature([MensagensAutomaticas])],
  controllers: [MensagensAutomaticasController],
  providers: [MensagensAutomaticasService],
})
export class MensagensAutomaticasModule {}