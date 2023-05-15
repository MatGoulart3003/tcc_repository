-- CreateTable
CREATE TABLE "maintenances" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "maintence" TEXT NOT NULL,
    "descriptionMaintence" TEXT NOT NULL,
    "km" TEXT NOT NULL,
    "obs" TEXT NOT NULL,
    "idCar" INTEGER NOT NULL,

    CONSTRAINT "maintenances_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "maintenances" ADD CONSTRAINT "maintenances_idCar_fkey" FOREIGN KEY ("idCar") REFERENCES "cars"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
