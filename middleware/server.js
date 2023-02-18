const express = require("express");
const fetch = require('node-fetch');
const app = express();
const cors = require("cors");
const token =
  /*your token*/;

const headers = {
  Authorization: token,
};

app.use(cors());


app.get("/api/teams/:conference", async (req, res) => {
    console.log(req);
    const response = await fetch(`https://api.collegefootballdata.com/teams?conference=${req.params.conference}`,
    { headers })
    res.json(await response.json())
})

app.get("/api/games/2022/:team", async (req, res) => {
    console.log(req);
    const response = await fetch(`https://api.collegefootballdata.com/games/teams?year=2022&team=${req.params.team}`,
    { headers })
    res.json(await response.json())
})

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
