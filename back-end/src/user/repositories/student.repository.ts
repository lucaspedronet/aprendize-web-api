import { Injectable } from '@nestjs/common';
import { user } from '@prisma/client';

import { PrismaService } from '@infra/services';

@Injectable()
export class StudentRepository {
    constructor(
        private readonly prisma: PrismaService
    ) {}

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