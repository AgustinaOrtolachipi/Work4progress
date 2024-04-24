import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FreelancerModule } from './freelancer/freelancer.module';
import { EmployerModule } from './employer/employer.module';

@Module({
  imports: [FreelancerModule, EmployerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
