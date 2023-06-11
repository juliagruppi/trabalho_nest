import { Factory, Faker } from '@mikro-orm/seeder';
import { MensagensAutomaticas } from './mensagensAutomaticas.entity';

export class MensagensAutomaticasFactory0 extends Factory<MensagensAutomaticas> {
    model = MensagensAutomaticas;

    definition(faker: Faker): Partial<MensagensAutomaticas> {
        return {
            mensagemAutomatica: mensagemAutomaticas[0]
        };
    }
}
export class MensagensAutomaticasFactory1 extends Factory<MensagensAutomaticas> {
    model = MensagensAutomaticas;

    definition(faker: Faker): Partial<MensagensAutomaticas> {
        return {
            mensagemAutomatica: mensagemAutomaticas[1]
        };
    }
}
export class MensagensAutomaticasFactory2 extends Factory<MensagensAutomaticas> {
    model = MensagensAutomaticas;

    definition(faker: Faker): Partial<MensagensAutomaticas> {
        return {
            mensagemAutomatica: mensagemAutomaticas[2]
        };
    }
}
export class MensagensAutomaticasFactory3 extends Factory<MensagensAutomaticas> {
    model = MensagensAutomaticas;

    definition(faker: Faker): Partial<MensagensAutomaticas> {
        return {
            mensagemAutomatica: mensagemAutomaticas[3]
        };
    }
}

const mensagemAutomaticas = [
    'Muito bem! Temos vários cursos e vídeos rápidos para te auxiliar em pequenos reparos elétricos, para isso basta acessar nosso site: www.ajeita-mulher/reparos-eletricos.',
    'Muito bem! Temos vários cursos e vídeos rápidos para te auxiliar em pequenos hidraúlicos, para isso basta acessar nosso site: www.ajeita-mulher/reparos-hidraulicos.',
    'Muito bem! Temos vários cursos e vídeos rápidos para te auxiliar cuidar das suas plantas e deixar sua casa ainda mais linda, para isso basta acessar nosso site: www.ajeita-mulher/jardinagem.',
    'Muito bem! Temos vários cursos e vídeos rápidos para te auxiliar com marcenaria, para isso basta acessar nosso site: www.ajeita-mulher/marcenaria.'
]