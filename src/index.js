const Express = require("express");
const app = Express();
const route = require("./controllers/Billing_Controllers");
const multer = require("multer");

// middelware functions for input convert to file and json formate
app.use(Express.json())
app.use(multer().any())


// url end point
app.use("/", route);


// url not correct or not found

app.use((req, res) => {
 return res.status(404).send({ message: "url not found" });
});


// node server is runnign on Port 3000 

app.listen(process.env.PORT || 3000, () => {
  console.log("port is running on " + (process.env.PORT || 3000));
});

