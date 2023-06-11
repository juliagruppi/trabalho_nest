import { Factory, Faker } from '@mikro-orm/seeder';
import { HistoricoAtendimento } from './historicoAtendimento.entity';

export class HistoricoAtendimentoFactory extends Factory<HistoricoAtendimento> {
    model = HistoricoAtendimento;

    definition(faker: Faker): Partial<HistoricoAtendimento> {
        const randomNumber = Math.round(Math.random() * 3) + 1
        return {
            mensagemCliente: `${randomNumber}`,
            mensagemAutomatica: mensagensAutomaticas[randomNumber - 1],
        };
    }
}

const mensagensAutomaticas = [
    'Muito bem! Temos vários cursos e vídeos rápidos para te auxiliar em pequenos reparos elétricos, para isso basta acessar nosso site: www.ajeita-mulher/reparos-eletricos.',
    'Muito bem! Temos vários cursos e vídeos rápidos para te auxiliar em pequenos hidraúlicos, para isso basta acessar nosso site: www.ajeita-mulher/reparos-hidraulicos.',
    'Muito bem! Temos vários cursos e vídeos rápidos para te auxiliar cuidar das suas plantas e deixar sua casa ainda mais linda, para isso basta acessar nosso site: www.ajeita-mulher/jardinagem.',
    'Muito bem! Temos vários cursos e vídeos rápidos para te auxiliar com marcenaria, para isso basta acessar nosso site: www.ajeita-mulher/marcenaria.'
]