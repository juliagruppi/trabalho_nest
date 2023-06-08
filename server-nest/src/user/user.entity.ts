import {
  Entity,
  Property,
  PrimaryKey,
  DateTimeType,
  BooleanType,
  Unique,
  OneToMany,
  Collection,
  BeforeCreate,
} from '@mikro-orm/core';
import * as bcrypt from 'bcrypt';
import { Protocolo } from 'src/protocolo/protocolo.entity';

@Entity()
export class User {
  @PrimaryKey()
  id: number;

  @Unique()
  @Property()
  email: string;

  @Property({ nullable: true, columnType: 'varchar(5000)' })
  userPicture?: string;

  @Property()
  name: string;

  @Property()
  surname: string;

  @Property()
  password: string;

  @Property({ type: DateTimeType })
  created_at = new Date();

  @OneToMany(() => Protocolo, (protocolo) => protocolo.user)
  protocolo = new Collection<Protocolo>(this);

  async comparePassword(password: string) {
    const passwordEquals = await bcrypt.compare(password, this.password);
    return passwordEquals;
  }

  @BeforeCreate()
  async hashPassword() {
    const rounds = 10;
    this.password = await bcrypt.hash(this.password, rounds);
  }
}