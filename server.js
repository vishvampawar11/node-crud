const express = require("express");
require("dotenv").config();
const cors = require("cors");

const connectDB = require("./db/connect");
const tasks = require("./routes/tasks");

const port = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/tasks", tasks);
app.use((req, res) => res.status(404).send("Route does not exist."));

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
