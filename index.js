import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
        const response = await axios.get("https://riddles-api.vercel.app/random") ;
        res.render("index.ejs", {answer: JSON.stringify(response.data.answer), riddle: JSON.stringify(response.data.riddle)});
    } catch (error) {
        res.status(404).send(error.message);}
});


app.listen(port, () => {console.log(`Running on port ${port}.`);});
