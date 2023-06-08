import {
    Injectable,
    UnauthorizedException,
    BadRequestException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { User } from '../user/user.entity';
import { LoginCredentialsDto } from './dto/login-credentials.dto';
import { CreateUserDto } from 'src/user/dto/createUser.dto';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
    ) { }

    async login({ email, password }: LoginCredentialsDto) {
        const maybeUser = await this.userService.findByEmail(email);
        if (maybeUser?.id === undefined) {
            throw new UnauthorizedException();
        }

        if (await maybeUser?.comparePassword(password)) {
            const { password, ...user } = maybeUser;
            const payload = { id: user.id, email: user.email };
            const accessToken = await this.jwtService.signAsync(payload);
            return {
                accessToken,
                user,
            };
        } else {
            throw new UnauthorizedException();
        }
    }

    async createAccount(createUserDto: CreateUserDto) {
        const maybeUser = await this.userService.findByEmail(createUserDto.email);
        if (maybeUser) {
            throw new BadRequestException({
                success: false,
                errors: {
                    email: 'O email digitado já está cadastrado no banco de dados.',
                },
            });
        }

        const user = await this.userService.create(createUserDto);
        const { accessToken } = await this.login({
            email: createUserDto.email,
            password: createUserDto.password,
        });

        return {
            user,
            accessToken,
            success: true,
        };
    }
}
  
