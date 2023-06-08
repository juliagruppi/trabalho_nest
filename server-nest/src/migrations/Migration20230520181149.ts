import { Migration } from '@mikro-orm/migrations';

export class Migration20230520181149 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `iniciar_bot` (`id` int unsigned not null auto_increment primary key, `mensagem` varchar(255) not null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `mensagens` (`id` int unsigned not null auto_increment primary key, `mensagem_cliente` varchar(255) not null, `mensagem_automatica` varchar(255) not null, `created_at` datetime not null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `mensagens_automaticas` (`id` int unsigned not null auto_increment primary key, `mensagem_automatica` varchar(255) not null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `user` (`id` int unsigned not null auto_increment primary key, `email` varchar(255) not null, `user_picture` varchar(5000) null, `name` varchar(255) not null, `surname` varchar(255) not null, `password` varchar(255) not null, `created_at` datetime not null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `user` add unique `user_email_unique`(`email`);');

    this.addSql('create table `protocolo` (`id` int unsigned not null auto_increment primary key, `nome_protocolo` varchar(255) not null, `created_at` datetime not null, `user_id` int unsigned not null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `protocolo` add index `protocolo_user_id_index`(`user_id`);');

    this.addSql('create table `historico_atendimento` (`id` int unsigned not null auto_increment primary key, `mensagem_cliente` varchar(255) not null, `mensagem_automatica` varchar(255) not null, `protocolo_id` int unsigned not null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `historico_atendimento` add index `historico_atendimento_protocolo_id_index`(`protocolo_id`);');

    this.addSql('alter table `protocolo` add constraint `protocolo_user_id_foreign` foreign key (`user_id`) references `user` (`id`) on update cascade on delete cascade;');

    this.addSql('alter table `historico_atendimento` add constraint `historico_atendimento_protocolo_id_foreign` foreign key (`protocolo_id`) references `protocolo` (`id`) on update cascade on delete cascade;');
  }

}
