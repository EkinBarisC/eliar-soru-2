const express = require("express");
const machines = require("./routes/machines");
const cors = require("cors");
const app = express();

app.use(cors());

machines(app);

app.listen(4000, () => {
  console.log("Server started on port 4000");
});
