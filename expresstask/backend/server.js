const express = require("express");
 const app = express();

 app.use(express.json());

 let products = [
{ id: 1, navn: "Product A", pris: 100 },
 { id: 2, navn: "Product B", pris: 200 },
 
 ];


 // route og sender products tilbage
 app.get("/products", (req, res) => {
 res.json(products);
 });

 // post data laver en request til body newprodukt får et nyt id og push newprodukt tilføjer
 app.post("/products", (req, res) => {
 const newProduct = req.body;
 newProduct.id = products.length + 1;
 products.push(newProduct);
 res.status(201).json(newProduct);
 });

 app.listen(3000, () => {
 console.log("Serveren kører på http://localhost:3000");
 });
 