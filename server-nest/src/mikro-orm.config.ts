import { User } from './user/user.entity';
import { HistoricoAtendimento } from './historicoAtendimento/historicoAtendimento.entity';
import { IniciarBot } from './iniciarBot/iniciarBot.entity';
import { Mensagens } from './mensagens/mensagens.entity';
import { Protocolo } from './protocolo/protocolo.entity';
import { MensagensAutomaticas } from './mensagensAutomaticas/mensagensAutomaticas.entity';

export default {
  entities: [HistoricoAtendimento, IniciarBot, User, Mensagens, Protocolo, MensagensAutomaticas],
  port: 3306,
  dbName: 'Chatbot',
  host: '127.0.0.1',
  user: 'root',
  password: 'senha',
  type: 'mysql',
};