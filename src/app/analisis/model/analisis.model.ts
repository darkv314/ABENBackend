import {
  Field,
  Int,
  ObjectType,
  GraphQLTimestamp,
  InputType,
} from '@nestjs/graphql';
import Muestra, { MuestraInput } from 'src/app/muestras/model/muestra.model';

@ObjectType()
export default class Analisis {
  @Field((type) => Int)
  id: number;

  @Field((type) => [Muestra], { nullable: true })
  muestras: Muestra[];
}

@InputType('AnalisisInput')
export class AnalisisInput {
  @Field((type) => [MuestraInput], { nullable: true })
  muestras: MuestraInput[];
}
