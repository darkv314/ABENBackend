/*
  Warnings:

  - You are about to drop the column `courrier` on the `Dosimetria` table. All the data in the column will be lost.
  - You are about to drop the column `almacenado` on the `Muestra` table. All the data in the column will be lost.
  - You are about to drop the column `cantidad` on the `Muestra` table. All the data in the column will be lost.
  - You are about to drop the column `empresa` on the `Muestra` table. All the data in the column will be lost.
  - You are about to drop the column `material` on the `Muestra` table. All the data in the column will be lost.
  - You are about to drop the column `pais` on the `Muestra` table. All the data in the column will be lost.
  - You are about to drop the column `direccion` on the `Servicio` table. All the data in the column will be lost.
  - You are about to drop the column `envio` on the `Servicio` table. All the data in the column will be lost.
  - You are about to drop the column `recojo` on the `Servicio` table. All the data in the column will be lost.
  - Added the required column `identificacion` to the `Muestra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `procedencia` to the `Muestra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo` to the `Muestra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Servicio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `empresa` to the `Servicio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nit` to the `Servicio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telefono` to the `Servicio` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Dosimetria" DROP COLUMN "courrier";

-- AlterTable
ALTER TABLE "Muestra" DROP COLUMN "almacenado",
DROP COLUMN "cantidad",
DROP COLUMN "empresa",
DROP COLUMN "material",
DROP COLUMN "pais",
ADD COLUMN     "coordenadas" TEXT,
ADD COLUMN     "identificacion" TEXT NOT NULL,
ADD COLUMN     "procedencia" TEXT NOT NULL,
ADD COLUMN     "tipo" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Servicio" DROP COLUMN "direccion",
DROP COLUMN "envio",
DROP COLUMN "recojo",
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "empresa" TEXT NOT NULL,
ADD COLUMN     "nit" TEXT NOT NULL,
ADD COLUMN     "telefono" TEXT NOT NULL;
