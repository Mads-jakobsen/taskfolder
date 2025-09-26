const express=require("express")
const app =express();

app.use(express.json()) // sender til json body


// routing til api reg res får info og sender

app.get("/api/data", (req, res) => {
  res.json({ name: "Elev", age: 15 });
});

app.listen(3000, () => {
 console.log("Serveren kører på http://localhost:3000");
 });
 