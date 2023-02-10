import { Field, Int, ObjectType, GraphQLTimestamp } from '@nestjs/graphql';
import Analisis from 'src/analisis/model/analisis.model';
import Calibracion from 'src/calibraciones/model/calibracion.model';
import Documento from 'src/documentos/model/documento.model';
import Dosimetria from 'src/dosimetrias/model/dosimetria.model';
import Estado from 'src/estados/model/estado.model';

@ObjectType()
export default class Servicio {
  @Field((type) => Int)
  id: number;

  @Field((type) => GraphQLTimestamp, { nullable: true })
  inicio: number;

  @Field((type) => GraphQLTimestamp, { nullable: true })
  fin: number;

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

  @Field((type) => [Analisis])
  analisis: Analisis[];

  @Field((type) => [Calibracion])
  calibraciones: Calibracion[];

  @Field((type) => [Dosimetria])
  dosimetrias: Dosimetria[];

  @Field((type) => [Documento])
  documentos: Documento[];
}
