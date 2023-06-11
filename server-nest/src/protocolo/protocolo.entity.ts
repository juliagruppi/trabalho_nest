import {
  PrimaryKey,
  Property,
  Entity,
  DateTimeType,
  ManyToOne,
  OneToMany,
  Collection
} from '@mikro-orm/core';
import { HistoricoAtendimento } from 'src/historicoAtendimento/historicoAtendimento.entity';
import { User } from 'src/user/user.entity';

@Entity()
export class Protocolo {
  @PrimaryKey()
  id: number;

  @Property()
  nomeProtocolo: string;

  @Property({ type: DateTimeType })
  created_at = new Date();

  @ManyToOne(() => User, {
    onDelete: 'cascade',
  })
  user: User;

  @OneToMany(() => HistoricoAtendimento, (historico) => historico.protocolo)
  historico = new Collection<HistoricoAtendimento>(this);

}