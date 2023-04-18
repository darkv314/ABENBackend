/*
  Warnings:

  - Added the required column `courrier` to the `Dosimetria` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Dosimetria" ADD COLUMN     "courrier" BOOLEAN NOT NULL;

-- CreateTable
CREATE TABLE "InfoCourrier" (
    "id" SERIAL NOT NULL,
    "dosimetriaId" INTEGER NOT NULL,
    "responsable" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,

    CONSTRAINT "InfoCourrier_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "InfoCourrier_dosimetriaId_key" ON "InfoCourrier"("dosimetriaId");

-- AddForeignKey
ALTER TABLE "InfoCourrier" ADD CONSTRAINT "InfoCourrier_dosimetriaId_fkey" FOREIGN KEY ("dosimetriaId") REFERENCES "Dosimetria"("id") ON DELETE CASCADE ON UPDATE CASCADE;
