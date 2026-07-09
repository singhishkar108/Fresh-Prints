// Render the Home / Landing page
exports.getHome = (req, res) => {
  res.render("home", { title: "Fresh Prints | Home" });
};

// Render the Products / Apparel page
exports.getProducts = (req, res) => {
  res.render("products", { title: "Fresh Prints | Apparel & Products" });
};

exports.getAbout = (req, res) => {
  res.render("about", { title: "Fresh Prints | About" });
};

// Optional placeholder routes for your other nav links if you create them later
exports.getTerms = (req, res) => {
  res.send("<h1>Terms and Conditions page coming soon!</h1>");
};

exports.getPrivacy = (req, res) => {
  res.send("<h1>Privacy Policy page coming soon!</h1>");
};

exports.getContact = (req, res) => {
  res.send("<h1>Contact Us page coming soon!</h1>");
};
