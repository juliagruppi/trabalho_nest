import { Migration } from '@mikro-orm/migrations';

export class Migration20230520195220 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table `mensagens_automaticas` modify `mensagem_automatica` varchar(5000) not null;');
  }

  async down(): Promise<void> {
    this.addSql('alter table `mensagens_automaticas` modify `mensagem_automatica` varchar(255) not null;');
  }

}
