"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployerController = void 0;
const common_1 = require("@nestjs/common");
const create_employer_dto_1 = require("./create.employer.dto");
const employer_service_1 = require("./employer.service");
let EmployerController = exports.EmployerController = class EmployerController {
    constructor(freelancerService) {
        this.freelancerService = freelancerService;
    }
    async create(createFreelancerDto) {
        return this.freelancerService.create(createFreelancerDto);
    }
    async findAll() {
        return this.freelancerService.findAll();
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_employer_dto_1.CreateEmployerDto]),
    __metadata("design:returntype", Promise)
], EmployerController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EmployerController.prototype, "findAll", null);
exports.EmployerController = EmployerController = __decorate([
    (0, common_1.Controller)('employer'),
    __metadata("design:paramtypes", [employer_service_1.EmployersService])
], EmployerController);
//# sourceMappingURL=employer.controller.js.map