var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "Train",
    database: "bamazonDB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n")
    
    departmentProducts();
});





function departmentProducts() {
    console.log("Selecting all items avialable for sale...\n");
    connection.query("SELECT  department_name FROM products", function(err, res) {
      if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
});
  }





//    Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.
//   The app should then prompt users with two messages.
  
  
  
//   The first should ask them the ID of the product they would like to buy.
//   The second message should ask how many units of the product they would like to buy.
  
  
  
//   Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.
  
  
  
//   If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.
  
  
  
//   However, if your store does have enough of the product, you should fulfill the customer's order.
  
  
//   This means updating the SQL database to reflect the remaining quantity.
//   Once the update goes through, show the customer the total cost of their purchase.
  
  
  
  
  
  
  
//   If this activity took you between 8-10 hours, then you've put enough time into this assignment. Feel free to stop here -- unless you want to take on the next challenge.
  
  