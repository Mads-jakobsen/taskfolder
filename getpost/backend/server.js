const express = require("express");
const app=express();

app.use(express.json())

let messages = [
{ name:"navn", message:"besked"}
];

// hent alle beskeder
app.get("/guestbook", (req, res) => {
  res.json(messages);
});

// tilføj en besked
app.post("/guestbook", (req, res) => {
  const { name, message } = req.body;
  if (!name || !message) {
    return res.status(400).json({ error: "Navn og besked kræves" });
  }
  messages.push({ name, message });
  res.status(201).json({ success: true });
});

app.listen(3000, () => {
 console.log("Serveren kører på http://localhost:3000");
 });