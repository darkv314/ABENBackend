import {
  Field,
  Int,
  ObjectType,
  GraphQLTimestamp,
  InputType,
} from '@nestjs/graphql';
import Muestra from 'src/app/muestras/model/muestra.model';

@ObjectType()
@InputType('AnalisisInput')
export default class Analisis {
  @Field((type) => Int)
  id: number;

  @Field((type) => [Muestra], { nullable: true })
  muestras: Muestra[];
}
