const express = require("express");

const router = express.Router();


// ==============================
// Login Route (GET)
// ==============================

router.get("/login", (req, res) => {
    res.send("Login Page Route Working");
});


// ==============================
// Signup Route (POST)
// ==============================

router.post("/signup", (req, res) => {

    // Get data from request body
    const { name, email, password } = req.body;

    // Validation
    if (!name || !email || !password) {
        return res.status(400).json({
            success: false,
            message: "All fields are required."
        });
    }

    // If validation passes
    res.status(200).json({
        success: true,
        message: "Validation Successful",
        user: {
            name,
            email
        }
    });

});


module.exports = router;