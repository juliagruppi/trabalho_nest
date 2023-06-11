import type { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { UserFactory } from '../user/user.factory';
import { ProtocoloFactory } from 'src/protocolo/protocolo.factory';
import { HistoricoAtendimentoFactory } from 'src/historicoAtendimento/historicoAtendimento.factory';

export class UserSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    const Users = await new UserFactory(em)
      .each(async (user) => {
        user.protocolo.set(new ProtocoloFactory(em)
          .each(async (protocolo) => {
            protocolo.historico.set(new HistoricoAtendimentoFactory(em).make(5))
          })
          .make(3, { user }))
      })
      .create(5)
  }
}