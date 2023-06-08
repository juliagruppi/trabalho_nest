import {
    PrimaryKey,
    Property,
    Entity,
    ManyToOne,
    DateTimeType,
  } from '@mikro-orm/core';
  
  @Entity()
  export class Mensagens {
    @PrimaryKey()
    id: number;
  
    @Property()
    mensagemCliente: string;

    @Property()
    mensagemAutomatica: string;
  
    @Property({ type: DateTimeType })
    created_at = new Date();

  }