/*
  Warnings:

  - You are about to drop the column `nombre` on the `Servicio` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[servicioId]` on the table `Analisis` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[servicioId]` on the table `Calibracion` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[servicioId]` on the table `Dosimetria` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `usuarioId` to the `Servicio` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Servicio_nombre_key";

-- AlterTable
ALTER TABLE "Servicio" DROP COLUMN "nombre",
ADD COLUMN     "usuarioId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Analisis_servicioId_key" ON "Analisis"("servicioId");

-- CreateIndex
CREATE UNIQUE INDEX "Calibracion_servicioId_key" ON "Calibracion"("servicioId");

-- CreateIndex
CREATE UNIQUE INDEX "Dosimetria_servicioId_key" ON "Dosimetria"("servicioId");

-- AddForeignKey
ALTER TABLE "Servicio" ADD CONSTRAINT "Servicio_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
