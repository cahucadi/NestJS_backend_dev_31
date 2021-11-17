import { UserEntity } from "src/user/models/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('products')
export class ProductEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50})
    name: string;

    // n:1 relation with user
    @ManyToOne( type => UserEntity, user => user.products , { nullable: false } )
    user: UserEntity;

}
