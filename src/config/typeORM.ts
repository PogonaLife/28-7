import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORM = (): TypeOrmModuleOptions => {
  return {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'Tu.vieja123',
    database: 'db_postgres',
    entities: ['dist/**/*.entity.{ts,js}'],
    synchronize: true,
  };
};
