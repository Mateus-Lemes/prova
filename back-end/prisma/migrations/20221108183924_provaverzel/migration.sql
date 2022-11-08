-- CreateTable
CREATE TABLE "Admin" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Modules" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Modules_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Classes" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "moduleId" INTEGER NOT NULL,

    CONSTRAINT "Classes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_username_key" ON "Admin"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Modules_name_key" ON "Modules"("name");

-- AddForeignKey
ALTER TABLE "Classes" ADD CONSTRAINT "Classes_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "Modules"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
