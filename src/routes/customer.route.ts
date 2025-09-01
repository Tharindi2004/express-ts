
// customer.route.ts
import { Router, Request, Response } from "express";

export class CustomerRoute {
    public router: Router;
    private static instance: CustomerRoute;

    public static getInstance(): CustomerRoute {
        if (!CustomerRoute.instance) {
            CustomerRoute.instance = new CustomerRoute();
        }
        return CustomerRoute.instance;
    }

    private constructor() {
        this.router = Router();
        this.setupRoutes();
    }

    private setupRoutes() {
        this.router.get("/", (req: Request, res: Response) => {
            res.send("Hello World");
        });

        this.router.post("/", (req: Request, res: Response) => {
            const { name } = req.body;
            res.send(`Hello ${name}`);
        });
    }
}
