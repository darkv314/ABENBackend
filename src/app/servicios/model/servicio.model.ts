import { Field, Int, ObjectType, GraphQLTimestamp } from '@nestjs/graphql';
import Analisis from 'src/app/analisis/model/analisis.model';
import Calibracion from 'src/app/calibraciones/model/calibracion.model';
import Documento from 'src/app/documentos/model/documento.model';
import Dosimetria from 'src/app/dosimetrias/model/dosimetria.model';
import Estado from 'src/app/estados/model/estado.model';

@ObjectType()
export default class Servicio {
  @Field((type) => Int)
  id: number;

  @Field()
  nombre: string;

  @Field((type) => GraphQLTimestamp, { nullable: true })
  inicio: number;

  @Field((type) => GraphQLTimestamp, { nullable: true })
  fin: number;

  @Field((type) => Int)
  cantidad: number;

  @Field((type) => Estado, {
    nullable: true,
    description: 'Estado del servicio',
  })
  estado: Estado;

  @Field({ nullable: true })
  direccion: string;

  @Field((type) => GraphQLTimestamp, {
    nullable: true,
    description: 'Fecha de recojo del material del cliente',
  })
  envio: number;

  @Field((type) => GraphQLTimestamp, {
    nullable: true,
    description: 'Fecha de envio del material del cliente',
  })
  recojo: number;

  @Field((type) => Analisis, { nullable: true })
  analisis: Analisis;

  @Field((type) => Calibracion, { nullable: true })
  calibraciones: Calibracion;

  @Field((type) => Dosimetria, { nullable: true })
  dosimetrias: Dosimetria;

  @Field((type) => [Documento], { nullable: true })
  documentos: Documento[];
}
