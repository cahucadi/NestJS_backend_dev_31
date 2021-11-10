import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IProduct } from './interfaces/product.interface';
import { CreateProductDTO } from './dto/create_product.dto';

@Injectable()
export class ProductService {

    constructor(){}


    async getProducts():Promise<IProduct[]>{
        return null;
    }

    async createProduct( createProductDTO: CreateProductDTO):Promise<IProduct>{
        return null;
    }


}
