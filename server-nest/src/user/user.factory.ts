import { Factory, Faker } from '@mikro-orm/seeder';
import { User } from './user.entity';

export class UserFactory extends Factory<User> {
    model = User;

    definition(faker: Faker): Partial<User> {
        return {
            email: faker.internet.email(),
            name: faker.name.firstName(),
            surname: faker.name.lastName(),
            created_at: faker.date.recent(),
            password: '12345678'
        };
    }
}

const mensagensAutomaticas = [
    'Muito bem! Temos vários cursos e vídeos rápidos para te auxiliar em pequenos reparos elétricos, para isso basta acessar nosso site: www.ajeita-mulher/reparos-eletricos.',
    'Muito bem! Temos vários cursos e vídeos rápidos para te auxiliar em pequenos hidraúlicos, para isso basta acessar nosso site: www.ajeita-mulher/reparos-hidraulicos.',
    'Muito bem! Temos vários cursos e vídeos rápidos para te auxiliar cuidar das suas plantas e deixar sua casa ainda mais linda, para isso basta acessar nosso site: www.ajeita-mulher/jardinagem.',
    'Muito bem! Temos vários cursos e vídeos rápidos para te auxiliar com marcenaria, para isso basta acessar nosso site: www.ajeita-mulher/marcenaria.'
]