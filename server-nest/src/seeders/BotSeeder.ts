import type { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';

import { IniciarBotFactory0, IniciarBotFactory1, IniciarBotFactory2, IniciarBotFactory3 } from 'src/iniciarBot/iniciarBot.factory';
import { MensagensAutomaticasFactory0, MensagensAutomaticasFactory1, MensagensAutomaticasFactory2, MensagensAutomaticasFactory3 } from 'src/mensagensAutomaticas/mensagensAutomaticas.factory';

export class BotSeeder extends Seeder {
    async run(em: EntityManager): Promise<void> {
        await new IniciarBotFactory0(em).create(1)
        await new IniciarBotFactory1(em).create(1)
        await new IniciarBotFactory2(em).create(1)
        await new IniciarBotFactory3(em).create(1)
        await new MensagensAutomaticasFactory0(em).create(1)
        await new MensagensAutomaticasFactory1(em).create(1)
        await new MensagensAutomaticasFactory2(em).create(1)
        await new MensagensAutomaticasFactory3(em).create(1)
    }
}
