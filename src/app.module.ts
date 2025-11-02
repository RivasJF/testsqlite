import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './task.entity';

@Module({
  imports: [ TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite', // <-- El archivo se creará aquí.
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // <-- ¡Recuerda, solo para desarrollo!
    }),
    TypeOrmModule.forFeature([Task]),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
