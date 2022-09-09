import express from 'express'
import login from './routes/auth'
import root from './routes/root'
import unknown from "./routes/unknown";
const app = express()

app.set( "view engine", "ejs" );

app.use(root)
app.use(login)
app.use(unknown)

export default app