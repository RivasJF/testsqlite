import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Task } from './task.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async create(@Body('title') title: string): Promise<Task> {
    // Nota: en una aplicación real, usarías un DTO aquí
    return this.appService.create(title);
  }

  @Get()
  async findAll(): Promise<Task[]> {
    return this.appService.findAll();
  }
}
