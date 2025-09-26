const express = require("express");
const app=express();

app.use(express.json())

let greeting = [
  { name: "person"}
]




//  hils
app.get("/greet", (req, res) => {
  const name = req.query.name || "Gæst";
  res.send(`Hej, ${name}!`);
});


app.listen(3000, () => {
 console.log("Serveren kører på http://localhost:3000");
 });