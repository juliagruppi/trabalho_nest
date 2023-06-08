import {
  PrimaryKey,
  Property,
  Entity,
  DateTimeType,
  ManyToOne
} from '@mikro-orm/core';
import { Protocolo } from 'src/protocolo/protocolo.entity';
import { User } from 'src/user/user.entity';

@Entity()
export class HistoricoAtendimento {
  @PrimaryKey()
  id: number;

  @Property()
  mensagemCliente: string;

  @Property()
  mensagemAutomatica: string;

  @ManyToOne(() => Protocolo, {
    onDelete: 'cascade',
  })
  protocolo: Protocolo;

}