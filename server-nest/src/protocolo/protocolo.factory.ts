import { Factory, Faker } from '@mikro-orm/seeder';
import { Protocolo } from './protocolo.entity';

export class ProtocoloFactory extends Factory<Protocolo> {
    model = Protocolo;

    definition(faker: Faker): Partial<Protocolo> {
        return {
            created_at: faker.date.recent(),
            nomeProtocolo: `Protocolo_${faker.random.numeric(2)}`,
        };
    }
}

const mensagensAutomaticas = [
    'Muito bem! Temos vários cursos e vídeos rápidos para te auxiliar em pequenos reparos elétricos, para isso basta acessar nosso site: www.ajeita-mulher/reparos-eletricos.',
    'Muito bem! Temos vários cursos e vídeos rápidos para te auxiliar em pequenos hidraúlicos, para isso basta acessar nosso site: www.ajeita-mulher/reparos-hidraulicos.',
    'Muito bem! Temos vários cursos e vídeos rápidos para te auxiliar cuidar das suas plantas e deixar sua casa ainda mais linda, para isso basta acessar nosso site: www.ajeita-mulher/jardinagem.',
    'Muito bem! Temos vários cursos e vídeos rápidos para te auxiliar com marcenaria, para isso basta acessar nosso site: www.ajeita-mulher/marcenaria.'
]