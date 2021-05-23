import { Injectable } from '@nestjs/common';
import { PrismaService } from '@infra/services';
import { user } from '@prisma/client';
import { InsertProfessorInput } from '@user/input-types';

@Injectable()
export class ProfessorRepository {
    constructor(
        private readonly prisma: PrismaService
    ) {}

    async create(input: InsertProfessorInput): Promise<user | null> {
        return await this.prisma.user.create({
            data: {...input}
        });
    }

    async listProfessor(id: string) {
        return await this.prisma.user.findUnique({
            where: {
                id,
            },
            include: {
                professor: true,
            }
        });
    }
}