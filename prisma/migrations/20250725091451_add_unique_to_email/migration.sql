/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Employee_name_key";

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
