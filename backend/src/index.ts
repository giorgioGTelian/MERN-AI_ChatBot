import express from "express";

const app = express();

/* routes */
app.get("/", (req, res) => {
  res.send("Hello World!");
});



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