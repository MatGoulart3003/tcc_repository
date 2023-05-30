/*
  Warnings:

  - You are about to drop the `MaintenancesForRecommend` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "MaintenancesForRecommend" DROP CONSTRAINT "MaintenancesForRecommend_idRecommendedMaint_fkey";

-- DropTable
DROP TABLE "MaintenancesForRecommend";

-- CreateTable
CREATE TABLE "maintenances_for_recommend" (
    "id" SERIAL NOT NULL,
    "descriptionMaintenance" TEXT NOT NULL,
    "km" TEXT NOT NULL,
    "obs" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "idRecommendedMaint" INTEGER NOT NULL,

    CONSTRAINT "maintenances_for_recommend_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "maintenances_for_recommend" ADD CONSTRAINT "maintenances_for_recommend_idRecommendedMaint_fkey" FOREIGN KEY ("idRecommendedMaint") REFERENCES "recommendeds_maints"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
