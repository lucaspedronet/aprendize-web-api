import { Injectable } from '@nestjs/common';
import { PrismaService } from '@infra/services';
import { classSchedule } from '@prisma/client';
import { ClassScheduleCreateInput } from '@edu/input-types';

@Injectable()
export class ClassScheduleRepository {
    constructor(
        private readonly prisma: PrismaService
    ) { }

    async create(input: ClassScheduleCreateInput): Promise<classSchedule | null> {
        return await this.prisma.classSchedule.create({
            data: { ...input }
        });
    }

    async listClassSchedule(id: string) {
        return await this.prisma.classSchedule.findUnique({
            where: {
                id,
            }
        });
    }
}