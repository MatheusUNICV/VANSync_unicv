import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
    imports: [DatabaseModule, AuthModule],
    controllers: [],
    providers: [],
})
export class AppModule { }