import { User } from './user/user.entity';
import * as dotenv from 'dotenv'
dotenv.config()
import { HistoricoAtendimento } from './historicoAtendimento/historicoAtendimento.entity';
import { IniciarBot } from './iniciarBot/iniciarBot.entity';
import { Mensagens } from './mensagens/mensagens.entity';
import { Protocolo } from './protocolo/protocolo.entity';
import { MensagensAutomaticas } from './mensagensAutomaticas/mensagensAutomaticas.entity';

export default {
  entities: [HistoricoAtendimento, IniciarBot, User, Mensagens, Protocolo, MensagensAutomaticas],
  port: process.env.MYSQL_PORT,
  dbName: process.env.MYSQL_DB_NAME,
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  type: 'mysql',
};