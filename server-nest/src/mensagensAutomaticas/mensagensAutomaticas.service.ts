import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { EntityRepository } from '@mikro-orm/mysql';
import { MensagensAutomaticas } from './mensagensAutomaticas.entity';

@Injectable()
export class MensagensAutomaticasService {
    constructor(
        @InjectRepository(MensagensAutomaticas)
        private readonly mensagemAutomaticaRepository: EntityRepository<MensagensAutomaticas>,
    ) { }

    async getMensagensAutomaticas(mensagemCliente: number) : Promise<MensagensAutomaticas> {
        const [resposta] = await this.mensagemAutomaticaRepository.find({id: mensagemCliente})
        return resposta
    }
}
