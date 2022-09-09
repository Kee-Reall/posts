import { Response, Request } from "express";

export default async function (req: Request, res: Response): Promise<void> {
    res.render('../views/index')
}