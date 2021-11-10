import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
import {ConfigModule} from '@nestjs/config'

@Module({
  imports: [
    StudentModule,
    MongooseModule.forRoot('mongodb+srv://root:root@cluster0.frpti.mongodb.net/db_gr_31', {
      useNewUrlParser: true
    }),
    ProductModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
