import { Injectable } from "@nestjs/common";
import { Employer } from "./employer.interface";
import { CreateEmployerDto } from "./create.employer.dto";

@Injectable()
export  class EmployersService{
    private readonly employer: Employer[] = [];


    create(CreateEmployerDto: CreateEmployerDto): Employer {
        const employer: Employer = {
            id: this.employer.length + 1,
            ...CreateEmployerDto,
            Company: "",
            Ubication: []
        };
        this.employer.push (employer);
        return employer;
    }
    findAll(): Employer[] {
        return this.employer;

    }
}