import express from "express";
const app = express();
/* routes */
app.get("/", (req, res) => {
    res.send("Hello World!");
});
/* debugging */
app.listen(5000, () => console.log("Server running on http://localhost:5000"));
console.log("do not give up. With 💓 By Gio");
//# sourceMappingURL=index.js.map