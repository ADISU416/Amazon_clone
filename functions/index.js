const functions = require('firebase-functions');
//secret key
// sk_test_51I2zpQGi2IIeNzQjO2sziZpkSZJHv61HTiTRYG7pJggoBhqlCeeuN9n7RfzqbWAjtJK2eSLgEWirouopnrBUqFcz00HYpqIAMa
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51I2zpQGi2IIeNzQjO2sziZpkSZJHv61HTiTRYG7pJggoBhqlCeeuN9n7RfzqbWAjtJK2eSLgEWirouopnrBUqFcz00HYpqIAMa"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,            // subunits of the currency
      currency: "usd",
    });
  
    //  201 -- OK and Created
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  });
  

// - Listen command
exports.api = functions.https.onRequest(app);

//(http://localhost:5001/amzon-fc8d9/us-central1/api)