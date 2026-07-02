const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// 1. Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// 2. Set up EJS and the layout middleware
app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // Explicitly sets views folder
app.set("layout", "_Layout"); // Renders layout file by default

// 3. Setup middleware to parse incoming form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 4. Default Route - home.ejs opens up first
app.get("/", (req, res) => {
  res.render("home", { title: "Home" });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
