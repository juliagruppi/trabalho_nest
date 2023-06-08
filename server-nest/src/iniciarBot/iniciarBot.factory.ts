import { Factory, Faker } from '@mikro-orm/seeder';
import { IniciarBot } from './iniciarBot.entity';

export class NotepadFactory extends Factory<IniciarBot> {
    model = IniciarBot;

    definition(faker: Faker): Partial<IniciarBot> {
        return {
            mensagem: mensagensIniciais[0]
        };
    }
}

const mensagensIniciais = [
    "Olá mana! Tudo bem? Me chamo Lívia e sou sua assistente virtual do Ajeita Menina.",
    "Vou te apresentar um poquinho do nosso projeto. Acreditamos que não existe “trabalho de homem” ou “trabalho de mulher”, mas sim que todos podemos aprender tudo aquilo que queremos. Frequentemente as mulheres são desencorajadas  a aprender reparos domésticos, visto como atividades masculinas. Entretanto, muitas mulheres que moram sozinhas se sentem inseguras de contratar homens para fazer reparos em casa.E porque não sermos cada vez mais antonomas, hein? ",
    "Por isso, quero te auxiliar a fazer pequenos reparos domésticos, com simplicidade e confiança. Vamos lá?!!",
    "Como posso te ajudar? (Digite o número da opção desejada) 1 - Reparos elétricos 2 - Reparos Hidraúlicos 3 - Jardinagem 4 - Marcenaria"
]