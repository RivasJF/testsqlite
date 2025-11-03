import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { Task } from 'generated/prisma/client';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async getAllTasks(): Promise<Task[]> {
    return this.prisma.task.findMany();
  }

  async createTask(title: string): Promise<Task> {
    return this.prisma.task.create({
      data: {title}
    })
  }
} 
