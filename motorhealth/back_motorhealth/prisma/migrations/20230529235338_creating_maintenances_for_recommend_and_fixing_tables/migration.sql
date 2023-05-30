/*
  Warnings:

  - You are about to drop the `recommendedMaint` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "recommendedMaint";

-- CreateTable
CREATE TABLE "recommendeds_maints" (
    "id" SERIAL NOT NULL,
    "codigoFipe" TEXT NOT NULL,
    "maintenance" INTEGER NOT NULL,

    CONSTRAINT "recommendeds_maints_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MaintenancesForRecommend" (
    "id" SERIAL NOT NULL,
    "descriptionMaintenance" TEXT NOT NULL,
    "km" TEXT NOT NULL,
    "obs" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "idRecommendedMaint" INTEGER NOT NULL,

    CONSTRAINT "MaintenancesForRecommend_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MaintenancesForRecommend" ADD CONSTRAINT "MaintenancesForRecommend_idRecommendedMaint_fkey" FOREIGN KEY ("idRecommendedMaint") REFERENCES "recommendeds_maints"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
