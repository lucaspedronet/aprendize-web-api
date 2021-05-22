-- CreateEnum
CREATE TYPE "gender" AS ENUM ('FEMININO', 'MASCULINO', 'SEM_GENERO');

-- CreateTable
CREATE TABLE "user" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "firstName" VARCHAR(50) NOT NULL,
    "lastName" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "gender" "gender" NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "dateOfBirth" TIMESTAMP(6) NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(6),

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "address" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "street" VARCHAR(255) NOT NULL,
    "city" VARCHAR(255) NOT NULL,
    "state" VARCHAR(4) NOT NULL,
    "zipCode" VARCHAR(50) NOT NULL,
    "country" VARCHAR(255) NOT NULL,
    "userId" UUID NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "student" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "grade" VARCHAR(255) NOT NULL,
    "fathersName" VARCHAR(255) NOT NULL,
    "mothersName" VARCHAR(255) NOT NULL,
    "parentEmail" VARCHAR(255) NOT NULL,
    "userId" UUID NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(6),

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "professor" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "graduationLevel" VARCHAR(255) NOT NULL,
    "userId" UUID NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "studentScore" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "score" INTEGER NOT NULL,
    "expertiseId" UUID NOT NULL,
    "professorId" UUID NOT NULL,
    "studentId" UUID NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "professorScore" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "score" INTEGER NOT NULL,
    "professorId" UUID NOT NULL,
    "studentId" UUID NOT NULL,
    "expertiseId" UUID NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "expertise" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "price" DECIMAL(10,2) NOT NULL,
    "duration" INTEGER NOT NULL,
    "professorId" UUID NOT NULL,
    "classTypeId" UUID NOT NULL,
    "gradeId" UUID NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "classType" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR(255) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "grade" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR(255) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "classSchedule" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "timeSlot" INTEGER NOT NULL,
    "meetingLink" VARCHAR(255) NOT NULL,
    "date" DATE NOT NULL,
    "reasonToDecline" TEXT NOT NULL,
    "accepted" BOOLEAN NOT NULL,
    "professorId" UUID NOT NULL,
    "studentId" UUID NOT NULL,
    "classTypeId" UUID NOT NULL,
    "gradeId" UUID NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user.email_unique" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "address_userId_unique" ON "address"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "student_userId_unique" ON "student"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "professor_userId_unique" ON "professor"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "studentScore_expertiseId_unique" ON "studentScore"("expertiseId");

-- CreateIndex
CREATE UNIQUE INDEX "studentScore_professorId_unique" ON "studentScore"("professorId");

-- CreateIndex
CREATE UNIQUE INDEX "studentScore_studentId_unique" ON "studentScore"("studentId");

-- CreateIndex
CREATE UNIQUE INDEX "professorScore_professorId_unique" ON "professorScore"("professorId");

-- CreateIndex
CREATE UNIQUE INDEX "professorScore_studentId_unique" ON "professorScore"("studentId");

-- CreateIndex
CREATE UNIQUE INDEX "professorScore_expertiseId_unique" ON "professorScore"("expertiseId");

-- CreateIndex
CREATE UNIQUE INDEX "expertise_professorId_unique" ON "expertise"("professorId");

-- CreateIndex
CREATE UNIQUE INDEX "expertise_classTypeId_unique" ON "expertise"("classTypeId");

-- CreateIndex
CREATE UNIQUE INDEX "expertise_gradeId_unique" ON "expertise"("gradeId");

-- CreateIndex
CREATE UNIQUE INDEX "classSchedule_professorId_unique" ON "classSchedule"("professorId");

-- CreateIndex
CREATE UNIQUE INDEX "classSchedule_studentId_unique" ON "classSchedule"("studentId");

-- CreateIndex
CREATE UNIQUE INDEX "classSchedule_classTypeId_unique" ON "classSchedule"("classTypeId");

-- CreateIndex
CREATE UNIQUE INDEX "classSchedule_gradeId_unique" ON "classSchedule"("gradeId");

-- AddForeignKey
ALTER TABLE "professorScore" ADD FOREIGN KEY ("professorId") REFERENCES "professor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "professorScore" ADD FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "professorScore" ADD FOREIGN KEY ("expertiseId") REFERENCES "expertise"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "classSchedule" ADD FOREIGN KEY ("professorId") REFERENCES "professor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "classSchedule" ADD FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "classSchedule" ADD FOREIGN KEY ("classTypeId") REFERENCES "classType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "classSchedule" ADD FOREIGN KEY ("gradeId") REFERENCES "grade"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "address" ADD FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "professor" ADD FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student" ADD FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studentScore" ADD FOREIGN KEY ("expertiseId") REFERENCES "expertise"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studentScore" ADD FOREIGN KEY ("professorId") REFERENCES "professor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studentScore" ADD FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "expertise" ADD FOREIGN KEY ("professorId") REFERENCES "professor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "expertise" ADD FOREIGN KEY ("classTypeId") REFERENCES "classType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "expertise" ADD FOREIGN KEY ("gradeId") REFERENCES "grade"("id") ON DELETE CASCADE ON UPDATE CASCADE;
