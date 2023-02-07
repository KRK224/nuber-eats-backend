import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export default class RestaurantResolver {
  // @Query(() => Boolean)
  @Query(() => Boolean) // graphQL을 위한 값
  isPizzaGood(): boolean {
    // typescript 문법
    return true;
  }
}
