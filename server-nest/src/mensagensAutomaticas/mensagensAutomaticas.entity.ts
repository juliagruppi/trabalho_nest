import {
    PrimaryKey,
    Property,
    Entity
  } from '@mikro-orm/core';
  
  @Entity()
  export class MensagensAutomaticas {
    @PrimaryKey()
    id: number;
  
    @Property({columnType: 'varchar(5000)'})
    mensagemAutomatica: string;

  }