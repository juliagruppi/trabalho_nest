import { Migration } from '@mikro-orm/migrations';

export class Migration20230520195036 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table `iniciar_bot` modify `mensagem` varchar(5000) not null;');
  }

  async down(): Promise<void> {
    this.addSql('alter table `iniciar_bot` modify `mensagem` varchar(255) not null;');
  }

}
