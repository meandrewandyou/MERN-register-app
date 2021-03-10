const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const route = require("./routes/routes")

app.use(express.json());
app.use(cors());
app.use("/signup", route);

mongoose.connect(process.env.DATABASE_ACCESS, {useNewUrlParser: true, useUnifiedTopology: true});













app.listen(4000,()=>"Server started at port 4000")
