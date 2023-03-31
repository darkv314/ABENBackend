/*
  Warnings:

  - You are about to drop the column `marca` on the `Equipo` table. All the data in the column will be lost.
  - Added the required column `actividad` to the `Dosimetria` table without a default value. This is not possible if the table is not empty.
  - Added the required column `expedido` to the `Empleado` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fabricante` to the `Equipo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Dosimetria" ADD COLUMN     "actividad" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Empleado" ADD COLUMN     "expedido" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Equipo" DROP COLUMN "marca",
ADD COLUMN     "fabricante" TEXT NOT NULL;
