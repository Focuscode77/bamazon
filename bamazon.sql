DROP DATABASE IF EXISTS bamazonDB;
CREATE database bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  item_id INTEGER NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NULL,
  department_name  VARCHAR(100) NULL,
  price INT NULL,
 stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);

-- alter table products AUTO_INCREMENT = 1000;

  SELECT * FROM products;

INSERT INTO products (item_id,product_name,department_name,price,stock_quantity)
VALUES ("Essentia","Grocery department",5.03,75);

INSERT INTO products (item_id,product_name,department_name,price,stock_quantity)
VALUES (" Mac Keyboard","Tech department",155.79,100);

INSERT INTO products (item_id,product_name,department_name,price,stock_quantity)
VALUES ("Polo Ralph Lauren Body Spray","Mens department",50.49,30);

INSERT INTO products (item_id,product_name,department_name,price,stock_quantity)
VALUES ("Eye Glasses","Warby Parker",105.07,75);

INSERT INTO products (item_id,product_name,department_name,price,stock_quantity)
VALUES ("Ice Cream", "Grocery department",5.02,4);

INSERT INTO products (item_id,product_name,department_name,price,stock_quantity)
VALUES ("Fan", "Tech department",20.04,55);

INSERT INTO products (item_id,product_name,department_name,price,stock_quantity)
VALUES ("Pen","School department",2.99,202);

INSERT INTO products (item_id,product_name,department_name,price,stock_quantity)
VALUES ("Grill","Outside department",40.97,75);

INSERT INTO products (item_id,product_name,department_name,price,stock_quantity)
VALUES ("Desktop table", "Tech department",34.66,9);

INSERT INTO products (item_id,product_name,department_name,price,stock_quantity)
VALUES ("Nike Gym Bag","Athletic department", 15.99,44);











