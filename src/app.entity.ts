import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity() 
export class Task {
  @PrimaryGeneratedColumn()
  id: number; // Columna 'id' autoincremental y clave primaria

  @Column()
  title: string; // Columna 'title' de tipo texto

  @Column({ default: false })
  isDone: boolean;
}