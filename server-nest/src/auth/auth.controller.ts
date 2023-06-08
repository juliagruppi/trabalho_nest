import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Req,
} from '@nestjs/common';
import { LoginCredentialsDto } from './dto/login-credentials.dto';
import { AuthService } from './auth.service';
import { Public } from './decorators/public-endpoint';
import { CreateUserDto } from 'src/user/dto/createUser.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() loginCredentialsDto: LoginCredentialsDto) {
    return this.authService.login(loginCredentialsDto);
  }

  @Public()
  @Post('/create-account')
  createAccount(@Body() createUserDto: CreateUserDto) {
    return this.authService.createAccount(createUserDto);
  }

}