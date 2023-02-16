/*
  Warnings:

  - You are about to drop the column `almacenado` on the `Analisis` table. All the data in the column will be lost.
  - You are about to drop the column `cantidad` on the `Analisis` table. All the data in the column will be lost.
  - You are about to drop the column `empresa` on the `Analisis` table. All the data in the column will be lost.
  - You are about to drop the column `material` on the `Analisis` table. All the data in the column will be lost.
  - You are about to drop the column `pais` on the `Analisis` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Analisis" DROP COLUMN "almacenado",
DROP COLUMN "cantidad",
DROP COLUMN "empresa",
DROP COLUMN "material",
DROP COLUMN "pais";

-- CreateTable
CREATE TABLE "Muestra" (
    "id" SERIAL NOT NULL,
    "analisisId" INTEGER NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "pais" TEXT NOT NULL,
    "empresa" TEXT NOT NULL,
    "almacenado" TEXT NOT NULL,
    "material" TEXT NOT NULL,

    CONSTRAINT "Muestra_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Muestra_analisisId_key" ON "Muestra"("analisisId");

-- AddForeignKey
ALTER TABLE "Muestra" ADD CONSTRAINT "Muestra_analisisId_fkey" FOREIGN KEY ("analisisId") REFERENCES "Analisis"("id") ON DELETE CASCADE ON UPDATE CASCADE;
