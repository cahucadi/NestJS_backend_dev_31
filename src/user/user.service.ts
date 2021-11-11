import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginUserDTO } from './dto/login_user.dto';
import { UserDTO } from './dto/user.dto';
import { UserEntity } from './models/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {

    

constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity> ){}

    async findOneUser(options?: object) : Promise<UserDTO>{
        const user = await this.userRepository.findOne(options);
        return this.userEntityToUserDTO(user);
    }

    
    async findByLogin( loginUserDTO: LoginUserDTO ): Promise<UserDTO>{

        const {username, password } = loginUserDTO;

        const user = await this.userRepository.findOne( { where: { username } } );

        if(!user){
            throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
        }

        const comparePassword = await bcrypt.compare( password, user.password);

        if(!comparePassword){
            throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
        }

        return this.userEntityToUserDTO(user);
    }


    async findByPayload( {username}: any): Promise<UserDTO>{

        const user = await this.findOneUser( { where:{username} } );
        return user;

    }


    userEntityToUserDTO( userEntity: UserEntity ): UserDTO {

        const { id, username, email, updatedAt, active } = userEntity;
        let userDTO : UserDTO = {id, username, email, updatedAt, active}; 
        return userDTO;

    }




}
