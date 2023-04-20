import {
  Field,
  Int,
  ObjectType,
  GraphQLTimestamp,
  InputType,
} from '@nestjs/graphql';
import Analisis, { AnalisisInput } from 'src/app/analisis/model/analisis.model';
import Calibracion, {
  CalibracionInput,
} from 'src/app/calibracion/model/calibracion.model';
import Documento from 'src/app/documento/model/documento.model';
import Dosimetria, {
  DosimetriaInput,
} from 'src/app/dosimetria/model/dosimetria.model';
import Estado from 'src/app/estados/model/estado.model';

@ObjectType()
export class Servicio {
  @Field((type) => Int)
  id: number;

  @Field()
  nombre: string;

  @Field()
  empresa: string;

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

  @Field()
  nit: string;

  @Field()
  telefono: string;

  @Field()
  email: string;

  @Field((type) => Analisis, { nullable: true })
  analisis: Analisis;

  @Field((type) => Calibracion, { nullable: true })
  calibraciones: Calibracion;

  @Field((type) => Dosimetria, { nullable: true })
  dosimetrias: Dosimetria;

  @Field((type) => [Documento], { nullable: true })
  documentos: Documento[];
}

@InputType()
export class ServicioInput {
  @Field()
  nombre: string;

  @Field()
  empresa: string;

  @Field((type) => Int)
  cantidad: number;

  @Field()
  nit: string;

  @Field()
  telefono: string;

  @Field()
  email: string;

  @Field((type) => AnalisisInput, { nullable: true })
  analisis: AnalisisInput;

  @Field((type) => CalibracionInput, { nullable: true })
  calibracion: CalibracionInput;

  @Field((type) => DosimetriaInput, { nullable: true })
  dosimetria: DosimetriaInput;

  @Field((type) => Int)
  usuarioId: number;
}
