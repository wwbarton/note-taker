const express = require("express");
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");
const app = express();
const PORT = 3001;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", htmlRoutes);
app.use("/", apiRoutes);

app.listen(PORT, () => {
  console.log(`API Server is listening on ${PORT}`);
});
