import { Response, Request } from "express";
import {connector} from "../helpers/connectToDB";


export default async function (req: Request, res: Response): Promise<void> {
    await connector()
    res.render('index')
}