import express from 'express'
import login from './routes/auth'
import root from './routes/root'
import unknown from "./routes/unknown";
import getIP from "./midleware/getIP";
import bodyParser from "body-parser";

const app = express()

app.set( "view engine", "ejs" );

app.use(getIP)


app.use(root)
app.use(login)
app.use(unknown)

export default app