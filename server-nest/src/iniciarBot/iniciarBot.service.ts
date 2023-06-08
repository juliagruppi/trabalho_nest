import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { EntityRepository } from '@mikro-orm/mysql';
import { IniciarBot } from './iniciarBot.entity';
import { ProtocoloService } from 'src/protocolo/Protocolo.service';
import { MensagensService } from 'src/mensagens/mensagens.service';

@Injectable()
export class IniciarBotService {
    constructor(
        @InjectRepository(IniciarBot)
        private readonly iniciarBotRepository: EntityRepository<IniciarBot>,
        private readonly protocoloService: ProtocoloService,
        private readonly mensagensService: MensagensService
    ) { }

    async iniciarBot(userId: number) {
        const deleteMensagens = await this.mensagensService.deleteTodasMensagens()
        const mensagensIniciais = await this.iniciarBotRepository.findAll()
        const protocolo = await this.protocoloService.newProtocolo(+userId)
        return {mensagensIniciais, protocolo_id: protocolo.id}
    }
}
