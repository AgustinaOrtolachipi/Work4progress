import { Controller, Get, Post, Body} from '@nestjs/common';
import { CreateFreelancerDto } from './create-freelancer.dto';
import { FreelancerService} from  "./freelancer.service";
import { Freelancer} from './freelancer.interface';

@Controller( 'freelancers')
export class FreelancerController {
    constructor (private readonly freelancerService: FreelancerService) {}

    @Post()
    async create (@Body() createFreelancerDto: CreateFreelancerDto) {
    return this.freelancerService.create(createFreelancerDto);
}

@Get()
async findAll() : Promise<Freelancer []> { 
    return this.freelancerService.findAll();
}


}
