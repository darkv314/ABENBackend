/*
  Warnings:

  - Added the required column `lecturas` to the `Dosimetria` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Dosimetria" ADD COLUMN     "lecturas" INTEGER NOT NULL;
