import { Freelancer } from "./freelancer.interface";
import { CreateFreelancerDto } from "./create-freelancer.dto";
export declare class FreelancerService {
    private readonly freelancers;
    create(createFreelancerDto: CreateFreelancerDto): Freelancer;
    findAll(): Freelancer[];
}
