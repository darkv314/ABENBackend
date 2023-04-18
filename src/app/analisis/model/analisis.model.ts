import { Field, Int, ObjectType, GraphQLTimestamp } from '@nestjs/graphql';
import Muestra from 'src/app/muestras/model/muestra.model';

@ObjectType()
export default class Analisis {
  @Field((type) => Int)
  id: number;

  @Field()
  nombre: string;

  @Field((type) => [Muestra], { nullable: true })
  muestras: Muestra[];
}
