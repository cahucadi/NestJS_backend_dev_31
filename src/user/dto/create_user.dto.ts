import {IsNotEmpty, IsEmail} from 'class-validator';

export class CreateUserDTO{

    @IsNotEmpty() readonly username: string;
    @IsNotEmpty() readonly password: string;
    @IsNotEmpty() @IsEmail() readonly email: string;
}