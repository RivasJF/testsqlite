import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly prismaService: PrismaService) {}

  @Get()
  findAll() {
    return this.appService.getAllTasks();
  }

  @Post()
  createTask(@Body('title') title: string) {
    return this.appService.createTask(title);
  }
}
