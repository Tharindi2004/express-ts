
// customer.route.ts
import { Router, Request, Response } from "express";
import { CustomerController } from "./controller/custormer.controller";

export class CustomerRoute {
    public router: Router;
    private static instance: CustomerRoute;
    private customerController: CustomerController;

    public static getInstance(): CustomerRoute {
        if (!CustomerRoute.instance) {
            CustomerRoute.instance = new CustomerRoute();
        }
        return CustomerRoute.instance;
    }

    private constructor() {
        this.router = Router();
        this.customerController = CustomerController.getInstance();
        this.setupRoutes();
    }

    private setupRoutes() {
        this.router.get("/", this.customerController.getCustomer);

    
    }
}
