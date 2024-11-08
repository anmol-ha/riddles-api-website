import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

const apiURL = " https://riddles-api.vercel.app/random";

app.get("/", async (req, res) => {
    try {
        const response = await axios.get(apiURL);
        const result = response.data;
        console.log(result.riddle + ' ' + result.answer);
        res.render("index.ejs", {result: result});
    } catch (error) {
        console.log(error.message);
    }
})

app.listen(port, () => {
    console.log(`App working on port ${port}.`);
})
