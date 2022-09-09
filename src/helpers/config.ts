import * as dotenv from 'dotenv'
import path from "path";

dotenv.config({
    path: path.resolve('config','Variables')
})

export const port = process.env.port ?? 3000