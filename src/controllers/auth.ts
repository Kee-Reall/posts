import { Response, Request } from "express";

export default {
    getHandler: async function (req: Request, res: Response): Promise<void> {
        console.log(req.socket.remoteAddress)
        res.status(200).render('auth')
    },
    postHandler: async function (req: Request, res: Response): Promise<void> {
        res.send('login post from controller')
    }
}