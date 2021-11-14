// Problem-2 Products Cart Object
// Given an input of products in the below format (Name Quantity Price)
// Input
// ["Rice", "Dal", "Salt"]
// [2, 3, 1]
// [60, 50, 20]
// Create an object with the key data which is an array of objects with the format {name: "Rice", quantity: 2, price: 60}
// The object must have a method called total which calculates the total values of items (multiplying quantity of each with its price)
// Sample output for the above case 290

var products_Cart = {

    data: [],
  
    productInput: function(name,quntity,price)
    {
      var cart = {
        names : name,
        quantity: quntity,
        price: price
      }
      this.data.push(cart);
    },
  
    total: function() 
    { 
      var total_values = 0
  
      for(var num = 0; num < this.data.length; num++)
      {
        var value = [];
        value = this.data[num].quantity * this.data[num].price
  
        total_values = total_values + value
      }
      return total_values
    }
  }
  
  products_Cart.productInput("Rice",2,60);
  products_Cart.productInput("Dal",3,50);
  products_Cart.productInput("Salt",1,20);
  
  products_Cart.total()
  // console.log(products_Cart.data)