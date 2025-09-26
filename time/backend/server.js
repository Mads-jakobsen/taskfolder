const express=require("express")
const app = express();

app.use(express.json())



let count = 0;

// reguest for count til at lægge til og respons sender count tilbage 

app.get("/counter", (req, res) => {
  count++;
  res.json({ count });
});

app.listen(3000, () => {
 console.log("Serveren kører på http://localhost:3000");
 });