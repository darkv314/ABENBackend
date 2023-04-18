import {
  Field,
  Int,
  ObjectType,
  GraphQLTimestamp,
  InputType,
} from '@nestjs/graphql';

@ObjectType()
@InputType('DocumentoInput')
export default class Documento {
  @Field((type) => Int)
  id: number;

  @Field()
  nombre: string;

  @Field()
  link: string;
}
