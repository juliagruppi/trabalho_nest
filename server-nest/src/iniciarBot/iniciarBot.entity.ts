import {
    PrimaryKey,
    Property,
    Entity
  } from '@mikro-orm/core';
  
  @Entity()
  export class IniciarBot {
    @PrimaryKey()
    id: number;
  
    @Property({columnType: 'varchar(5000)'})
    mensagem: string;
  }