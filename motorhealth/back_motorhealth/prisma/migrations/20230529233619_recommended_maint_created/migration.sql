-- CreateTable
CREATE TABLE "recommendedMaint" (
    "id" SERIAL NOT NULL,
    "codigoFipe" TEXT NOT NULL,
    "km" TEXT NOT NULL,
    "descriptionMaintenance" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "maintenance" INTEGER NOT NULL,

    CONSTRAINT "recommendedMaint_pkey" PRIMARY KEY ("id")
);
