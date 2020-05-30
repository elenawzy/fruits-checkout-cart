const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

app.use(bodyParser.json());

var cart = {
    totalPrice: 0,
    discount: 1,
    tax: 1
};

function calculateTotal(totalPrice, discount, tax) {
  let total = totalPrice;
  total *= discount;
  total *= tax;
  return total.toFixed(2);
}

app.get("/", (req, res) => res.send("Hello World!"));

app.post("/addItem", (req, res) => {
  let newPrice = Number(req.body.price);
  cart.totalPrice += newPrice;
  console.log(cart.totalPrice);
  res.end();
});

app.post("/removeItem", (req, res) => {
  let newPrice = Number(req.body.price);
  cart.totalPrice -= newPrice;
  console.log(cart.totalPrice);
  res.end();
});

app.post("/addMultiplier", (req, res) => {
  let newMultiplier = parseFloat(req.body.multiplier);
  if (req.body.type === "Tax") {
    cart.tax = newMultiplier;
  }
  else {
    cart.discount = newMultiplier;
  }
  console.log(cart.tax);
  res.end();
});

app.post("/removeMultiplier", (req, res) => {
  if (req.body.type === "Tax") {
    cart.tax = 1;
  }
  else {
    cart.discount = 1;
  }
  console.log(cart.tax);
  res.end();
});

app.get("/calculateTotal", (req, res) => {
  totalString = calculateTotal(cart.totalPrice, cart.discount, cart.tax);
  console.log(totalString);
  res.send({totalString});
});

app.listen(port, () => console.log("Listening on port 5000!"));

module.exports = {
  calculateTotal: calculateTotal
}
