// Sub Category  => produce offer details 

const produce = {
    apple: {
      category: "Produce",
      subcategory: "fruit",
      price: 50, //Kg
      offer: {
        buy: 3, //buy 3 kg
        get: 1, //get 1 free
      },
    },
    orange: {
      category: "Produce",
      subcategory: "fruit",
      price: 80, // Kg
      offer: 20, // 20% Off
    },
    mango: {
      category: "Produce",
      subcategory: "fruit",
      price: 50, // Kg
      offer: 10, // 10% Off
    },
  
    potato: {
      category: "Produce",
      subcategory: "veg",
      price: 30, // Kg
      offer: {
        buy: 5, // buy 5Kg
        get: 2, // get 2 kg free
      },
    },
  
    tomato: {
      category: "Produce",
      subcategory: "veg",
      price: 70, // Kg
      offer: 10, // 10% Off
    },
  };

  module.exports = produce;