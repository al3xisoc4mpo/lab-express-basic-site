// 1. IMPORTACIONES
const express = require("express");
const res = require("express/lib/response");
const router = express.Router();

// 2. RUTEO
router.get("/", (req, res) => {
    res.render("index"); 
})

router.get("/about", (req, res) => {
    // res.send("About");
})

router.get("/works", (req, res) => {
    // res.send("Works");
})

// 3. EXPORTACION
module.exports = router;