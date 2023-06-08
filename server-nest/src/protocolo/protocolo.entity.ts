import {
  PrimaryKey,
  Property,
  Entity,
  DateTimeType,
  ManyToOne
} from '@mikro-orm/core';
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

}