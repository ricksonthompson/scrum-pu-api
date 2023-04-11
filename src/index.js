require("dotenv").config();
const {
  TrelloServiceIntegration,
} = require("./integrations/services/trello/trello.service.integration");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

let response;
const app = express();
const trelloServiceIntegration = new TrelloServiceIntegration();

app.use(cors({ origin: "*" }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.head("/api/webhooks", (req, res) => {
  console.log("Connected with webhook");

  res.send("successful!");
});

app.post("/api/webhooks", (req, res) => {
  console.log(">>> hooked by Trello");

  response = req.body;

  res.send("successful!");
});

app.get("/api/webhooks", (req, res) => {
  res.json(response);
});

app.get("/api/cards/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const response = await trelloServiceIntegration.getCard(id);

    res.json(response);
  } catch (error) {
    console.log(error);
    res.send("Error to process request!");
  }
});

app.listen(process.env.PORT, () => {
  console.log(`🚀power-up running on port ${process.env.PORT}...`);
});
