import express from "express"
import config from "./config.js";
import userRouter from "./index.routes.js"
import cors from "cors";
const app = express();
const port = config.app.port

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use('/api', userRouter)

app.get("/", (req, res) => {

    console.log(req.query);

    const name = req.query.name
    const iname = req.query.iname

    //res.status(200).send({name: "boat"})

    res.status(200).send({name, iname})



})

//app.get("/:name/:name/:iname/:iname", (req, res) => {

    //console.log(req.query);

    //res.status(200).send({name: "boat"})

//})


app.post("/", (req, res) => {

    const{ name, iname} = req.body
    res.status(200).send({ name, iname})


})

app.listen(port ,() => {
    console.log(`server runing port ${port}`)
})

