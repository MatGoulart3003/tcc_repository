/*
  Warnings:

  - You are about to drop the column `codigoFipe` on the `recommendeds_maints` table. All the data in the column will be lost.
  - Added the required column `codigo_fipe` to the `recommendeds_maints` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "recommendeds_maints" DROP COLUMN "codigoFipe",
ADD COLUMN     "codigo_fipe" TEXT NOT NULL;
