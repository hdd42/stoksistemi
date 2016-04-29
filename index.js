import express from "express"
import consign from "consign";

const app = express();


app.get("/", (req,res) => {
    res.status(200).send("Merhaba Node.js");
})

app.listen(3000, () => console.log(`uygulamamiz 3000 nolu port uzerinde calismakta`))
