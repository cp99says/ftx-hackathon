const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
const api = require("./routes/routes");
const cors = require("cors");
const conn_string =
  "mongodb+srv://cp99says:cp99says@cluster0.ethe1.mongodb.net/HighwayHelp?retryWrites=true&w=majority";

const local_conn_string = "mongodb://localhost:27017/HighwayHelp";
mongoose.connect(local_conn_string).then(
  () => {
    console.log(`connected to mongoDB compass`);
  },
  (err) => {
    /** handle initial connection error */
    console.log(err);
  }
);
app.get("/", (req, res) => {
  res.send("ok");
});
app.use(cors());
app.use("/api", api);
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server started at port: ${PORT}`);
});
