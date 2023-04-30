import express from 'express'
import bodyParser from 'body-parser'
import {videoRouter} from "./routes/video-router";
import {testRouter} from "./routes/test-router";

const app = express()
const port = process.env.PORT || 3000

const parserMiddleware = bodyParser();
app.use(parserMiddleware)

app.use('/testing', testRouter)
app.use('/videos', videoRouter)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})