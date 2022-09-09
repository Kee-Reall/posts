import express from 'express'
import login from './routes/auth'
import root from './routes/root'
import path from "path";

const app = express()

app.set( "view engine", "ejs" );
app.set( "views", path.resolve('src', "views" ) );

app.use(root)
app.use(login)

export default app