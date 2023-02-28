/*
  Warnings:

  - A unique constraint covering the columns `[nombre]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nombre` to the `Servicio` table without a default value. This is not possible if the table is not empty.
  - Made the column `inicio` on table `Servicio` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Servicio" ADD COLUMN     "nombre" TEXT NOT NULL,
ALTER COLUMN "inicio" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_nombre_key" ON "Usuario"("nombre");
