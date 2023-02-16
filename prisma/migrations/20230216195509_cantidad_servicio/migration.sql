/*
  Warnings:

  - Added the required column `cantidad` to the `Servicio` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Servicio" ADD COLUMN     "cantidad" INTEGER NOT NULL;
