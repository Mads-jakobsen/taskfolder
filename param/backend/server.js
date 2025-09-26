const express=require("express")
const app=express();

app.use (express.json())

// produkt
let products = [
  { id: 1, navn: "Product A", pris: 100 },
  { id: 2, navn: "Product B", pris: 200 },
];

// hent et produkt ID
app.get("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);
  if (!product) return res.status(404).json({ error: "Produkt ikke fundet" });
  res.json(product);
});

app.listen(3000, () => {
 console.log("Serveren kører på http://localhost:3000");
 });