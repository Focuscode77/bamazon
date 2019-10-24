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
runSearch();

});


// Starts inquirer to ask the user questions

function runSearch() {
    inquirer
        .prompt({
            name: "action",
            type: "rawlist",
            message: "What would you like to buy?",
            choices: [
                "Find something in our tech department",
                "Find everything in the store",
                "Find something in grocery department",
                "Find something in Mens department",
                "Find something in Warby Parker",
                "Find something in Electronic department",
                "Find something in School department",
                "Find something in Athletic department",
                "Find somethinf in Outside department"
            ]
        })
        .then(function (answer) {
            switch (answer.action) {
                case "Find everything in the store":
                    departmentProducts();
                    break;

                case "Find something in our tech department":
                    techSearch();
                    break;

                case "Find something in grocery department":
                    //   function goes here
                    break;

                case "Find something in Mens department":
                    // function goes here
                    break;

                case "Find something in Warby Parker":
                    //   function goes here
                    break;
                case "Find something in Electronic department":
                    //   function goes here
                    break;
                case "Find something in School department":
                    break;
                case "Find something in Athletic department":
                    break;
                 case "Find something in Outside department":
                     break;

            }
        });
}

// Seraches all products
function departmentProducts() {
    console.log("Selecting all items avialable for sale...\n");
    connection.query("SELECT  product_name FROM products", function (err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.log(res);
        connection.end();
    });
}


// Finds everthing in tech department
function techSearch() {
    inquirer
      .prompt({
        name: "products",
        type: "input",
        message: "How many would you like to buy?"
      })
      .then(function(answer) {
        var query = "SELECT product_name, stock_quantity FROM products WHERE ?";
        connection.query(query, { product_name: answer.stock_quantity }, function(err, res) {
          for (var i = 0; i < res.length; i++) {
            console.log("Product: " + res[i].product_name + " || Stock: " + res[i].stock_quantity);
          }
          runSearch();
        });
      });
  }
// The second message should ask how many units of the product they would like to buy.



// Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.



// If not, the app should log a phrase like Insufficient quantity! , and then prevent the order from going through.



//     However, if your store does have enough of the product, you should fulfill the customer's order.


// This means updating the SQL database to reflect the remaining quantity.
// Once the update goes through, show the customer the total cost of their purchase.








