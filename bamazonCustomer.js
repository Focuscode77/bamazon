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
    // Run functions to start program!
    displayProducts();
    setTimeout(shop, 3000);

});


// Displays all products within store for customer

function displayProducts() {
    connection.query("SELECT * FROM products", function(err,res){
        console.log("------------------------------");
        console.log("ID | Product | Price");
        console.log("-----------------------------");
        for(var i = 0; i < res.length; i++){
        console.log(res[i].item_id + "|" + res[i].product_name + "|" + res[i].price);
        console.log("------------------------");

        }

    })
   
}

// Seraches all products



// Finds everthing in tech department
function shop() {
    connection.query("SELECT * FROM products ", function (err, res) {
        // Log all results of the SELECT statement
        inquirer
        .prompt([
            {

            name: "choice",
            type: "list",
            choices: function(){
                var choiceArray= [];
                for(var i = 0 ; i < res.length; i++){
                choiceArray.push(res[i].item_id.toString());

                }
                return choiceArray;

            },
            message: "Based on the product id which one would you like?"
        }, 
        {
            name: "quantity",
            type: "list",
            choices:["1","2","3","4","5"],
            message: "How many would you like to purchase?"

        }   
        
        ]).then( function(answer){
         var chosenItem;
         for(var i = 0; i < res.length; i++){
          if(res[i].item_id === parseInt(answer.choice)){
             chosenItem = res[i];

          }

         }

         var totalPaid = chosenItem.price * answer.quantity;

         if(chosenItem.stock_quantity >= parseInt(answer.quantity)){
          connection.query(
              "Update products Set ? Where ?",
              [
                 {
                    stock_quantity: chosenItem.stock_quantity - answer.quantity

                 },
                 {
                   item_id: chosenItem.item_id

                 }

              ],
              function(error){
                  if(error) throw err;
                  console.log("Purchase succesful! Your purchase came to a total of $" + totalPaid)
            //    function reset
              setTimeout(displayProducts, 3000);
              setTimeout(shop, 5000);

              }
          )

         }
        else{
           console.log("we dont have enough avialable in stock please try agian!")
            // Function reset
           setTimeout(displayProducts, 3000);
              setTimeout(shop, 5000);
        }


        });
    });

};

