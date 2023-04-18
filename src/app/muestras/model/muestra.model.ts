import { Field, Int, ObjectType, InputType } from '@nestjs/graphql';

@ObjectType()
@InputType('MuestraInput')
export default class Muestra {
  @Field((type) => Int)
  id: number;

  @Field()
  tipo: string;

  @Field()
  procedencia: string;

  @Field()
  identificacion: string;

  @Field({ nullable: true })
  coordenadas: string;
}
