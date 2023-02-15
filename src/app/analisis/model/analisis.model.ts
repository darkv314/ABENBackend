import { Field, Int, ObjectType, GraphQLTimestamp } from '@nestjs/graphql';

@ObjectType()
export default class Analisis {
  @Field((type) => Int)
  id: number;

  @Field((type) => Int, {
    description: 'Cantidad de la muestra en miles de toneladas',
  })
  cantidad: number;

  @Field({ description: 'Pais destino del material' })
  pais: string;

  @Field({ description: 'Empresa destino del material' })
  empresa: string;

  @Field({ description: 'Direccion de almacenado' })
  almacenado: string;

  @Field({ description: 'Tipo de material' })
  material: string;
}
