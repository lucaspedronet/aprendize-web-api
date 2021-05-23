import { Injectable } from '@nestjs/common';
import { PrismaService } from '@infra/services';
import { user } from '@prisma/client';
import { InsertStudentInput } from '@user/input-types';

@Injectable()
export class StudentRepository {
    constructor(
        private readonly prisma: PrismaService
    ) { }

    async create(input: InsertStudentInput): Promise<user | null> {
        return await this.prisma.user.create({
            data: { ...input }
        });
    }

    async listStudent(id: string): Promise<user | null> {
        return await this.prisma.user.findUnique({
            where: {
                id,
            },
            include: {
                student: true,
            }
        });
    }
}