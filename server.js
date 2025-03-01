const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // Enable CORS

// Serve images from the "public" directory
app.use("/images", express.static("public"));

// Route to get a specific image
app.get("/images/:category/:type/:color/:image", (req, res) => {
  const { category, type, color, image } = req.params;
  const filePath = `public/${category}/${type}/${color}/${image}`;

  res.sendFile(filePath, { root: __dirname }, (err) => {
    if (err) {
      res.status(404).send("Image not found");
    }
  });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
