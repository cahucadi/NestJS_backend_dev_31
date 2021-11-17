import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductDto } from './dto/product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductEntity } from './entities/product.entity';

@Injectable()
export class ProductService {

  constructor(
    @InjectRepository(ProductEntity)  private readonly productRepository: Repository<ProductEntity>,
    private readonly userService: UserService
  ){

  }
 
  async create(createProductDto: CreateProductDto): Promise<ProductDto> {

    const { name, userId } = createProductDto;

    const product:ProductEntity = new ProductEntity();
    product.name = name;
    product.user = await this.userService.findUserById(userId);

    await this.productRepository.save(product);
    return this.productEntityToProductDTO(product);

  }

  findAll() {
    return `This action returns all product`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }


  productEntityToProductDTO( productEntity: ProductEntity ): ProductDto {

    const { id, name, user } = productEntity;
    
    let productDTO: ProductDto = new ProductDto();
    productDTO.id = id;
    productDTO.name = name; 
    productDTO.userId = user.id; 
    
    return productDTO;

}


}
