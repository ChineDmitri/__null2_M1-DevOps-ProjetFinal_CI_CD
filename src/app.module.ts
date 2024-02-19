import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../volume/browser/'), // path to static
      renderPath: '/', // affichage
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_DB_HOST_PROD || 'mysql-db',
      port: parseInt(process.env.MYSQL_DB_PORT_PROD, 10) || 3306,
      username: process.env.MYSQL_DB_USER_PROD || 'student',
      password: process.env.MYSQL_DB_PASSWORD_PROD || 'student',
      database: process.env.MYSQL_DB_DATABASE_PROD || 'rdv',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
