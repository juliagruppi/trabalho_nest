import { IsNumber, IsString } from 'class-validator';
  
  export class newMensagemDto {
  
    @IsString()
    mensagemUsuario: string;

    @IsNumber()
    protocoloId: number;
  
  }