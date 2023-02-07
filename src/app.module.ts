import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import type { ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';
import { RestaurantsModule } from './restaurants/restaurants.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true, // 직접 파일을 생성하지 않고 메모리에 저장 옵션
      // autoSchemaFile: join(process.cwd(), 'src/schema.gql')
    }),
    RestaurantsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
