import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  async findAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  async create(title: string): Promise<Task> {
    const newTask = this.taskRepository.create({ title });
    return this.taskRepository.save(newTask);
  }

  getHello(): string {
    return 'Hello World!';
  }
} 
