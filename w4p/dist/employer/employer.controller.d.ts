import { CreateEmployerDto } from './create.employer.dto';
import { EmployersService } from "./employer.service";
import { Employer } from './employer.interface';
export declare class EmployerController {
    private readonly freelancerService;
    constructor(freelancerService: EmployersService);
    create(createFreelancerDto: CreateEmployerDto): Promise<Employer>;
    findAll(): Promise<Employer[]>;
}
