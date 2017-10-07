const Database = require("./database");

const User = require("./models/user");
const Product = require("./models/product");

const users = require("./data/users.json");
const products = require("./data/products.json");

const db = new Database({ host: "localhost:27017", database: "myShop" });

db.connect(err => {
  if (err) {
    console.error(err);
  } else {
    Promise.resolve()
      .then(() => console.log("Removing all data..."))
      .then(() => User.remove({}))
      .then(() => Product.remove({}))
      .then(() => console.log("Inserting data..."))
      .then(() => User.insertMany(users))
      .then(() => Product.insertMany(products))
      .then(() => console.log("Seeding done"))
      .then(() => db.close());
  }
});
