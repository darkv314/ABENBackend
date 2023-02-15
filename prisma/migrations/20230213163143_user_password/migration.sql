/*
  Warnings:

  - You are about to drop the column `estadoId` on the `Servicio` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[servicioId]` on the table `Estado` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nombre]` on the table `Servicio` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nombre]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cargo` to the `Empleado` table without a default value. This is not possible if the table is not empty.
  - Added the required column `servicioId` to the `Estado` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Made the column `telefono` on table `Usuario` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Servicio" DROP CONSTRAINT "Servicio_estadoId_fkey";

-- DropIndex
DROP INDEX "Servicio_estadoId_key";

-- AlterTable
ALTER TABLE "Empleado" ADD COLUMN     "cargo" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Estado" ADD COLUMN     "servicioId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Servicio" DROP COLUMN "estadoId";

-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "password" TEXT NOT NULL,
ALTER COLUMN "telefono" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Estado_servicioId_key" ON "Estado"("servicioId");

-- CreateIndex
CREATE UNIQUE INDEX "Servicio_nombre_key" ON "Servicio"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_nombre_key" ON "Usuario"("nombre");

-- AddForeignKey
ALTER TABLE "Estado" ADD CONSTRAINT "Estado_servicioId_fkey" FOREIGN KEY ("servicioId") REFERENCES "Servicio"("id") ON DELETE CASCADE ON UPDATE CASCADE;
