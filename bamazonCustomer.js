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
                    grocerySearch();
                    break;

                case "Find something in Mens department":
                    menSearch();
                    break;

                case "Find something in Warby Parker":
                    warbySearch();
                    break;
                case "Find something in Electronic department":
                    ElectronicSearch();
                    break;
                case "Find something in School department":
                    // function goes here
                    break;
                case "Find something in Athletic department":
                    // function goes here
                    break;
                case "Find something in Outside department":
                    // function goes here
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
            message: "How many would you like to buy?",
           
        }).then(function(answer) {
            // when finished prompting, insert a new item into the db with that info
            console.log("Selecting all items avialable for tech...\n");
          connection.query("SELECT * FROM products WHERE department_name ='Tech department'", function (err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.log(res);
        connection.end();
    });
        })


};

// Finds everything in grocery
function grocerySearch() {
    inquirer
        .prompt({
            name: "products",
            type: "input",
            message: "How many would you like to buy?",
           
        }).then(function(answer) {
            // when finished prompting, insert a new item into the db with that info
            console.log("Selecting all items avialable for grocery department...\n");
          connection.query("SELECT * FROM products WHERE department_name ='Grocery department'", function (err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.log(res);
        connection.end();
    });
        })


};

// Finds everything in the mens department
function menSearch() {
    inquirer
        .prompt({
            name: "products",
            type: "input",
            message: "How many would you like to buy?",
           
        }).then(function(answer) {
            // when finished prompting, insert a new item into the db with that info
            console.log("Selecting all items avialable in mens department...\n");
          connection.query("SELECT * FROM products WHERE department_name ='Mens department'", function (err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.log(res);
        connection.end();
    });
        })


};


// Finds everything in Warby parker
function warbySearch() {
    inquirer
        .prompt({
            name: "products",
            type: "input",
            message: "How many would you like to buy?",
           
        }).then(function(answer) {
            // when finished prompting, insert a new item into the db with that info
            console.log("Selecting all items avialable in Warby...\n");
          connection.query("SELECT * FROM products WHERE department_name ='Warby Parker'", function (err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.log(res);
        connection.end();
    });
        })


};
// Electronic 
function ElectronicSearch() {
    inquirer
        .prompt({
            name: "products",
            type: "input",
            message: "How many would you like to buy?",
           
        }).then(function(answer) {
            // when finished prompting, insert a new item into the db with that info
            console.log("Selecting all items avialable in Electronic...\n");
          connection.query("SELECT * FROM products WHERE department_name ='Electronic department'", function (err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.log(res);
        connection.end();
    });
        })


};








