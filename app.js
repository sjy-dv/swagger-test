const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerDoc = require("./swagger.json");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.get("/getuser", (req, res) => {
  res.status(200).json({
    name: "user1",
    age: 11,
    desc: "user info",
  });
});

require("http").createServer(app).listen(8081);
