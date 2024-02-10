import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDb from "./config/db.js";
import newVamaniData from "./models/newVamaniData.js";
import newVamaniLogin from "./models/newVamaniLogin.js";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

connectDb();

app.get("/vamani", async (req, resp) => {
    const data = await newVamaniData.find();
    resp.send(data)
})

app.post("/vamani", async (req, resp) => {
    let user = new newVamaniData(req.body);
    let result = await user.save();
    resp.send(result);
    console.log(result);
})

app.post('/signin', async (req, resp) => {
    // console.warn(req.body);
    if (req.body.password && req.body.login) {
        let user = await newVamaniLogin.findOne(req.body);
        if (user) {
            resp.send(user);
        }
        else {
            return 0;
        }
    }
})

app.post("/login", async (req, resp) => {
    let data = new newVamaniLogin(req.body);
    let result = await data.save();
    resp.send(result);
    console.log(result);
})

app.listen(process.env.PORT || 8080, () => {
    console.log(`Server is running at port ${process.env.PORT}`);
})