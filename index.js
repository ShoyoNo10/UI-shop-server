const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// DB холболт
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB холбогдлоо"))
  .catch((err) => console.error(err));

// Routes
const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);

app.listen(PORT, () => {
  console.log(`Сервер ${PORT} порт дээр ажиллаж байна`);
});
