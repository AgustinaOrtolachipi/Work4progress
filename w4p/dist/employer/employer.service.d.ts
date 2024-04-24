import { Employer } from "./employer.interface";
import { CreateEmployerDto } from "./create.employer.dto";
export declare class EmployersService {
    private readonly employer;
    create(CreateEmployerDto: CreateEmployerDto): Employer;
    findAll(): Employer[];
}
