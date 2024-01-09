import express from "express";
import { config } from "dotenv";
config();
const app = express();

/* routes */
app.get("/", (req, res) => {
  res.send("Hello World!");
});


// GET
// PUT
// POST
// DELETE

// GET /api/products
// GET /api/products/:id
// POST /api/products
// PUT /api/products/:id
// DELETE /api/products/:id

/* middlewares */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




/* debugging */
app.listen(5000, () =>
  console.log("Server running on http://localhost:5000")
);


console.log(
  "do not give up. With 💓 By Gio"
);

/*
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
*/