DROP DATABASE IF EXISTS bamazonDB;
CREATE database bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,,
  product_name VARCHAR(100) NULL,
  department_name  VARCHAR(100) NULL,
  price INT NULL,
 stock_quantity INT NULL,
  PRIMARY KEY (id)
);

  SELECT * FROM products;

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Essentia","Grocery department",5,75);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES (" Mac Keyboard","Tech department",155,100);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Polo Ralph Lauren Body Spray","Mens department",50,30);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Eye Glasses","Warby Parker",105,75);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Ice Cream", "Grocery department",5,23);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Fan", "Electronic department",20,55);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Pen","School department",2,202);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Grill","Outside department",40,75);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Desktop table", "Tech department",25,9);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Nike Gym Bag","Athletic department", 15,44);











