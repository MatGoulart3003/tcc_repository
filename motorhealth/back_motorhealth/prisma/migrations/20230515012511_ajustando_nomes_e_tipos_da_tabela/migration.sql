/*
  Warnings:

  - You are about to drop the column `descriptionMaintence` on the `maintenances` table. All the data in the column will be lost.
  - Added the required column `descriptionMaintenance` to the `maintenances` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `maintenance` on the `maintenances` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "maintenances" DROP COLUMN "descriptionMaintence",
ADD COLUMN     "descriptionMaintenance" TEXT NOT NULL,
DROP COLUMN "maintenance",
ADD COLUMN     "maintenance" INTEGER NOT NULL;
