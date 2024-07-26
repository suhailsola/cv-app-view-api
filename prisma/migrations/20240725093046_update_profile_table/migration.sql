/*
  Warnings:

  - A unique constraint covering the columns `[user_id]` on the table `Profiles` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_id]` on the table `Socials` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_id` to the `Profiles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Socials` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Profiles" DROP CONSTRAINT "Profiles_id_fkey";

-- DropForeignKey
ALTER TABLE "Socials" DROP CONSTRAINT "Socials_id_fkey";

-- AlterTable
ALTER TABLE "Profiles" ADD COLUMN     "user_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Socials" ADD COLUMN     "user_id" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Profiles_user_id_key" ON "Profiles"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Socials_user_id_key" ON "Socials"("user_id");

-- AddForeignKey
ALTER TABLE "Profiles" ADD CONSTRAINT "Profiles_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Socials" ADD CONSTRAINT "Socials_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Profiles"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
