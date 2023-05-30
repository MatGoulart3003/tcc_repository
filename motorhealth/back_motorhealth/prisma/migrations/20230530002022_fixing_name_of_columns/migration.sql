/*
  Warnings:

  - You are about to drop the column `descriptionMaintenance` on the `maintenances_for_recommend` table. All the data in the column will be lost.
  - You are about to drop the column `idRecommendedMaint` on the `maintenances_for_recommend` table. All the data in the column will be lost.
  - Added the required column `description_maintenance` to the `maintenances_for_recommend` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_recommended_maint` to the `maintenances_for_recommend` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "maintenances_for_recommend" DROP CONSTRAINT "maintenances_for_recommend_idRecommendedMaint_fkey";

-- AlterTable
ALTER TABLE "maintenances_for_recommend" DROP COLUMN "descriptionMaintenance",
DROP COLUMN "idRecommendedMaint",
ADD COLUMN     "description_maintenance" TEXT NOT NULL,
ADD COLUMN     "id_recommended_maint" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "maintenances_for_recommend" ADD CONSTRAINT "maintenances_for_recommend_id_recommended_maint_fkey" FOREIGN KEY ("id_recommended_maint") REFERENCES "recommendeds_maints"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
