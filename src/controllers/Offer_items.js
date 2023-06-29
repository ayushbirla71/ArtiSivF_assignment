const dairy = require('../itemsDetails/Dairy');
const fruits = require("../itemsDetails/Produce");


const Category = {
  Produce: {
    offer: 10,
    subcategory: {
      fruit: 18,
      veg: 5,
    },
  },

  Dairy: {
    offer: 15,
    subcategory: {
      milk: 20,
      cheese: 20,
    },
  },
};





function discount_calculate (item, quantity) {
  let item_Detail = "";

  if (fruits[item]) {
    item_Detail = fruits[item];
  } else if (dairy[item]) {
    item_Detail = dairy[item];
  } else {
    return ({status : false, message: " not avalabel"  });
  }

  let MRP = item_Detail.price;
  let item_off = item_Detail?.offer;
  let mrp_rs = quantity * MRP;

       // Buy 2 Get 1 Free Offer applay 

  if (typeof item_off == "object") {
    let total = item_off.buy + item_off.get;
    let count = 0;

    if (total <= quantity) {
      let i = quantity;
      for (i; i >= total; i = i - total) {
        count += item_off.get;
      }
    }

    let offer_final_discount = MRP * count;
    let final_rs = mrp_rs - offer_final_discount;

    return ({ MRP_PRICE: mrp_rs, Offer_PRICE: final_rs  , status : true});
  }
  
        // % Off Offer applay
  else {
    let item_Category = item_Detail["category"];

    let item_subCategory = item_Detail["subcategory"];

    let item_Category_tree = Category[item_Category];

    let category_off = item_Category_tree?.offer;

    let subcategory_off = item_Category_tree["subcategory"][item_subCategory];

    let fainaloffer = 0;
    if (item_off > subcategory_off) {
      fainaloffer = item_off;
    } else if (subcategory_off > category_off) {
      fainaloffer = subcategory_off;
    } else {
      fainaloffer = category_off;
    }

    let offer_rs = (mrp_rs * fainaloffer) / 100;
    let offer_finalrs = mrp_rs - offer_rs;

    return ({ MRP_PRICE: mrp_rs, Offer_PRICE: offer_finalrs  , status : true});
  }
};

module.exports = discount_calculate;
