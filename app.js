const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("I am Available");
});

const start = async () => {
    try {
        app.listen(prompt, hostname, backlog)
    } catch (error) {
        console.log(error); 
        
    }
};