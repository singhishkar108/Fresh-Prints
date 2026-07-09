const express = require("express");
const router = express.Router();
const pageController = require("../controllers/pageController");

// Map URL routes to controller functions
router.get("/", pageController.getHome);
router.get("/products", pageController.getProducts);
router.get("/about", pageController.getAbout);
router.get("/terms", pageController.getTerms);
router.get("/privacy", pageController.getPrivacy);
router.get("/contact", pageController.getContact);

module.exports = router;
