import express from "express";
import dotenv from "dotenv";
// import ejs from "ejs";
import userRouter from "./routes/userRoute.js";
// import postRouter from "./routes/postRoute.js";
import path from "path";

dotenv.config({path: "./config/config.env"});  //used to hide the port number in .env

const app = express();

app.set("view engine","ejs");
app.set("views",path.resolve("./views"))

app.get("/", (req, res) => {
    res.render("home",{
        title:"Social.ly"
    })
    // res.send("Hello from the server!");  //we give general response so that home route doesn't crash....
});


app.use(express.json());
app.use(express.urlencoded({ extended: false}))
app.use("/api/v1/user", userRouter);
// app.use("/api/v1/post", postRouter);

app.get("/login",(req,res)=>{
    res.render("login");
})

export default app;