import { Module } from '@nestjs/common';
import { EmployerController } from './employer.controller';
import { EmployersService } from './employer.service';

@Module({
controllers: [EmployerController],
providers: [EmployersService],


})
export class EmployerModule {}
