const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5500;
const whatsappNumber = process.env.WHATSAPP_NUMBER || "";

app.use(express.static(path.join(__dirname)));

app.get("/api/config", (_req, res) => {
  if (!whatsappNumber) {
    return res.status(500).json({
      error: "WHATSAPP_NUMBER nao configurado no ambiente."
    });
  }

  return res.json({
    whatsappBaseUrl: `https://wa.me/${whatsappNumber}`
  });
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado em http://localhost:${PORT}`);
});
