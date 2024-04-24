import { Injectable } from "@nestjs/common";
import { Freelancer } from "./freelancer.interface";
import { CreateFreelancerDto } from "./create-freelancer.dto";

@Injectable()
export class FreelancerService {
    private readonly freelancers: Freelancer [] = [];

    create(createFreelancerDto: CreateFreelancerDto): Freelancer {
        const freelancer: Freelancer = {
            id: this.freelancers.length + 1,
            ...createFreelancerDto,
        };
        this.freelancers.push (freelancer);
        return freelancer;
    }
    findAll(): Freelancer[] {
        return this.freelancers;

    }
}