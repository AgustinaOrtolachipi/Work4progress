import { CreateFreelancerDto } from './create-freelancer.dto';
import { FreelancerService } from "./freelancer.service";
import { Freelancer } from './freelancer.interface';
export declare class FreelancerController {
    private readonly freelancerService;
    constructor(freelancerService: FreelancerService);
    create(createFreelancerDto: CreateFreelancerDto): Promise<Freelancer>;
    findAll(): Promise<Freelancer[]>;
}
