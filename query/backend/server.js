const express=require("express")
const app=(express());

app.use (express.json())

const products=[
{ id:1, name: "sko", pris:150 },
{ id:2, name: "hue", pris:300 },
{ id:3, name: "hat", pris:400 },


]


// filtrer produkter pris
app.get("/products/filter", (req, res) => {
  const maxPrice = parseInt(req.query.maxPrice) || 1000;
  const filtered = products.filter(p => p.pris <= maxPrice);
  res.json(filtered);
});

app.listen(3000, () => {
 console.log("Serveren kører på http://localhost:3000");
 });