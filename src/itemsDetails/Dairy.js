
// Sub Category  => Dairy offer details 

const dairy = {
    cowmilk: {
      category: "Dairy",
      subcategory: "milk",
      price: 50, // Liter
      offer: {
        buy: 3, // buy 3 Liter
        get: 1, // get 1 Liter free
      },
    },
    soymilk: {
      category: "Dairy",
      subcategory: "milk",
      price: 40, // Liter
      offer: 10, // 10% Off
    },
    cheddar: {
      category: "Dairy",
      subcategory: "cheese",
      price: 50, // Kg
      offer: {
        buy: 2, // buy 2 kg
        get: 1, // get 1 kg free
      },
    },
    gouda: {
      category: "Dairy",
      subcategory: "cheese",
      price: 80, //Kg
      offer: 10, // 10% Off
    },
  };

  module.exports = dairy;