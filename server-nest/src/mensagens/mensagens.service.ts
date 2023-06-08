import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { Mensagens } from './mensagens.entity';
import { EntityRepository } from '@mikro-orm/mysql';
import { MensagensAutomaticas } from 'src/mensagensAutomaticas/mensagensAutomaticas.entity';
import { HistoricoAtendimento } from 'src/historicoAtendimento/historicoAtendimento.entity';
import { ProtocoloService } from 'src/protocolo/Protocolo.service';
import { HistoricoAtendimentoService } from 'src/historicoAtendimento/historicoAtendimento.service';

@Injectable()
export class MensagensService {
    constructor(
        @InjectRepository(Mensagens)
        private readonly mensagensRepository: EntityRepository<Mensagens>,
        @InjectRepository(MensagensAutomaticas)
        private readonly mensagemAutomaticaRepository: EntityRepository<MensagensAutomaticas>,
        private readonly historicoAtendimentoService: HistoricoAtendimentoService,
        private readonly protocoloService: ProtocoloService
    ) { }

    async interactBot(mensagemRecebida: string, protocoloId: number) {
        let respostaDoBot = 'Ops... Não entendi sua resposta'
        const [mensagemAutomatica] = await this.mensagemAutomaticaRepository.find({ id: +mensagemRecebida })
        if (mensagemAutomatica) {
            respostaDoBot = mensagemAutomatica.mensagemAutomatica
        }

        const novaMensagem = new Mensagens
        novaMensagem.mensagemAutomatica = respostaDoBot
        novaMensagem.mensagemCliente = `${mensagemRecebida}`

        const novaMensagemCriada = this.mensagensRepository.create(novaMensagem)
        await this.mensagensRepository.flush()

        const [protocolo] = await this.protocoloService.findById(protocoloId)
        const novaEntradaHistorico = new HistoricoAtendimento
        novaEntradaHistorico.mensagemAutomatica = respostaDoBot
        novaEntradaHistorico.mensagemCliente = `${mensagemRecebida}`
        novaEntradaHistorico.protocolo = protocolo

        const entradaHistorico = await this.historicoAtendimentoService.createHistorico(novaEntradaHistorico)
        const historico = await this.historicoAtendimentoService.getHistoricoById(protocolo.id, protocolo.user.id)
        return historico

    }

    async getTodasMensagens () {
        const mensagens = await this.mensagensRepository.findAll()
        return mensagens
    }

    async deleteTodasMensagens() {
        const mensagensDeletadas = await this.mensagensRepository.nativeDelete({})
        return mensagensDeletadas
    }
}
