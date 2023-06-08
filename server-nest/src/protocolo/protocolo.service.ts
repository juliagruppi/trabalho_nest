import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { EntityRepository } from '@mikro-orm/mysql';
import { Protocolo } from './protocolo.entity';
import { User } from 'src/user/user.entity';
import { ProtocoloQueryDto } from './dto/protocoloQuery.dto';

@Injectable()
export class ProtocoloService {
    constructor(
        @InjectRepository(Protocolo)
        private readonly protocoloRepository: EntityRepository<Protocolo>,
        @InjectRepository(User)
        private readonly userRepository: EntityRepository<User>,
    ) { }

    async newProtocolo(userId: number) {
        const user = await this.userRepository.findOneOrFail({ id: userId }, { populate: ['protocolo'] })
        const lengthProtocolo = user.protocolo.length + 1
        const nomeProtocolo = `Protocolo ${user.name} ${lengthProtocolo}`
        const novoProtocolo = new Protocolo
        novoProtocolo.user = user
        novoProtocolo.nomeProtocolo = nomeProtocolo
        const protocolo = this.protocoloRepository.create(novoProtocolo)
        await this.protocoloRepository.flush()

        return protocolo
    }

    async findById(protocoloId: number) {
        const protocolo = await this.protocoloRepository.find({ id: protocoloId })
        return protocolo
    }
    async findAllProtocolos(userId: number, { search, orderBy = 'created_at', direction = 'asc', limit = 8, offset = 0 }: ProtocoloQueryDto) {
        const [protocolos, count] = await this.protocoloRepository.findAndCount(

            search ? {
                user: userId,
                $or: [
                    {
                        nomeProtocolo: {
                            $like: `%${search}%`,
                        },
                    },
                    {
                        nomeProtocolo: {
                            $like: `%${search}`,
                        },
                    },
                    {
                        nomeProtocolo: {
                            $like: `%${search}%`,
                        },
                    }]
            } : { user: userId }, {
            orderBy: { [orderBy]: direction },
            limit,
            offset,

        })

        return { protocolos, count }
    }




}
