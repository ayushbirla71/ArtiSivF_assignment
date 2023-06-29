const express = require("express");
const discount_calculate = require("./Offer_items");
const route = express.Router();


// route end point for billing site

route.post("/bill", (req, res) => {
  let { details } = req.body;

  let data = details.toLowerCase().split(",");

  let bill = {}; // empty object

  let total_price = 0;
  
  let total_mrp_price = 0;

  // loop for select one on one input data

  for (let i = 0; i < data.length; i++) {

    let match = data[i].match(/(\d+)/);

    let item = data[i].trim().split(" ");

    // call discount calculate function for calculate offer price 
    
    let calculate_price = discount_calculate(item[0], match[0]);
    
    if(calculate_price.status == true){

      total_price += calculate_price["Offer_PRICE"];
  
      total_mrp_price += calculate_price["MRP_PRICE"];
  
      bill[item[0]] = { Qte: item[1], Price: calculate_price["Offer_PRICE"] };

      console.log(calculate_price);
    }

    else {
      return res.status(400).send({message:` ${item[0]} is ${calculate_price.message}`})
    }

  }

  // print output on console
  console.log({
    item: bill,
    Total_Amount: total_price,
    Your_saved: `${total_mrp_price} - ${total_price} = ${
      total_mrp_price - total_price
    }`,
  });

  //  send output on client
  return res.send({
    item: bill,
    Total_Amount: total_price,
    Your_saved: `${total_mrp_price} - ${total_price} = ${
      total_mrp_price - total_price
    }`,
  });
});

module.exports = route;
