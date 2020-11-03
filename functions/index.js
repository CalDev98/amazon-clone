const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HYgCqGKS1GTFkeM7rFyFGoF2Pjcblf6ne5HA1IjCryWK6sbE3pbfua5gDXVBaltuI6EFEOYrhwzxDwxd6UlTksm00eDacJ8CF"
);

// Set-up the API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("payment request recieved, for this amount ==", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of the currency
    currency: "usd",
  });

  // 201 means OK - Create
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

//
