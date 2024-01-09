import express from "express";
import { config } from "dotenv";
import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";

//connections and listeneres
const PORT = process.env.PORT || 5000;
connectToDatabase()
  .then(() => {
    app.listen(PORT, () =>
      console.log("Server Open & Connected To Database 🤟")
    );
  })
  .catch((err) => console.log(err));

//config
/*todo  */
// GET /api/products
// GET /api/products/:id
// POST /api/products
// PUT /api/products/:id
// DELETE /api/products/:id
// GET /api/products/:id/reviews
console.log(
  "do not give up. With 💓 By Gio"
);