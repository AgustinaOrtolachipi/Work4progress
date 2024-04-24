import { Controller, Get, Post, Body} from '@nestjs/common';
import { CreateEmployerDto } from './create.employer.dto';
import { EmployersService} from  "./employer.service";
import { Employer} from './employer.interface';

@Controller( 'employer')
export class EmployerController {
    constructor (private readonly freelancerService: EmployersService) {}

    @Post()
    async create (@Body() createFreelancerDto: CreateEmployerDto) {
    return this.freelancerService.create(createFreelancerDto);
}

@Get()
async findAll() : Promise<Employer[]> { 
    return this.freelancerService.findAll();
}


}
