import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { EntityRepository } from '@mikro-orm/mysql';
import { User } from 'src/user/user.entity';
import { HistoricoAtendimento } from './historicoAtendimento.entity';

@Injectable()
export class HistoricoAtendimentoService {
    constructor(
        @InjectRepository(HistoricoAtendimento)
        private readonly historicoAtendimentoRepository: EntityRepository<HistoricoAtendimento>,
        @InjectRepository(User)
        private readonly userRepository: EntityRepository<User>,
    ) { }

    async createHistorico(historico: HistoricoAtendimento) {
        const entrada = this.historicoAtendimentoRepository.create(historico)
        await this.historicoAtendimentoRepository.flush()
        return entrada
    }

    async getHistoricoById(protocoloId: number, userId: number) {
        const historico = await this.historicoAtendimentoRepository.find({ protocolo: { id: protocoloId, user: userId } })
        return historico
    }
    async getAllHistorico(userId: number) {
        const historicos = await this.historicoAtendimentoRepository.find({ protocolo: { user: userId } })
        return historicos
    }
}
