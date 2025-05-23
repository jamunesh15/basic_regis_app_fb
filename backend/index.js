const express = require("express");

require("dotenv").config();

const app = express();



app.use(express.json());

// Your routes    
const route = require("./routes/userroute");
app.use("/api/v1", route);

// DB connection
const dbconnect = require("./config/dbconnect");
dbconnect();

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
