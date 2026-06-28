const express = require("express");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use(authRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to Real Estate Portal Backend");
});

app.listen(5000, () => {
    console.log("Server is running on Port 5000");
});