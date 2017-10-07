![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# PP | Mongo Shop

<img src="https://i.imgur.com/IJKRm71.png" width="300px">

## Introduction

We want to build a small database for an e-commerce application.

We interviewed the client and she gave us the following requirements for the application:

- She wants to store products with some information
- She needs to save the client information
- Should be able to look the shopping history of every client
- Products can have a category
- Users can review products and rate them by assigning 1 to 5 stars

With this information, we should be able to get started in modeling our Mongo Database. Ready?

## Setup the repo

You are gonna build an e-commerce terminal application.

```shell
$ git clone https://github.com/yacinehmito/lab-mongoose-shop
```
Once you've downloaded the repo, type:

```javascript
$ cd lab-mongoose-shop
$ npm install
```

The project has the following structure

| Folder          | Description
|-----------------|--------
| `/data`         | Folder that contain the json for collections
| `/models`       | Folder that contain the Mongoose models
| `database.js`   | Class to connect with Mongoose and perform queries
| `questions.js`  | Class to interact through the prompt terminal and ask questions
| `main.js`       | Our main file, where everything starts
| `seeds.js`      | File that will import the data to the database 

Open the project with your editor

## Modeling the Data

First of all we need identify the entities in order to create our collections.

### Models

There are differents ways to design the structure. If we come from the world of SQL an approach can be, 4 collections: Users, Products, ShoppingCarts and Reviews. But we are in MongoDB so we can embed documents. The proposed structure is the following.

- Users
  - ShoppingCarts
- Products
  - Reviews

The structured proposed is 2 collections `users` and `products`, inside the collection `users` we will store the historical purchases.  In the `products` collection we will have the reviews of each product. Each collection will have a Mongoose model that you will need to defined first. You can find the relevant boilerplate code in the `models` directory.

Here are some sample data that will help you define the schemas:

**Sample User**
```javascript
{
  "_id": ObjectId("582e3c59eb1b8eb7be087448"),
  "firstName": "John",
  "lastName": "Smith",
  "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),
  "address": {
   "streetAddress": "21 2nd Street",
   "city": "New York",
   "state": "NY",
   "postalCode": "10021"
  },
  "shoppingCart": [
    ObjectId("582e3dd006a0c0b81841f47e"),
    ObjectId("582e3cc7b03b5db7dd616cc8")
  ]
}
```

**Sample Product**

```javascript
{
  "_id": ObjectId("582e3dd006a0c0b81841f47e"),
  "name": "WiredTiger T-shirt",
  "description":"Crafted from ultra-soft combed cotton, this essential t-shirt features sporty contrast tipping and MongoDB's signature leaf.",
  "category":"Apparel",
  "reviews": [
    {
      "name": "Shannon",
      "comment": "This is so warm and comfortable.",
      "stars": 2,
      "date": "2016-11-10T18:28:09.369Z"
    },
    {
      "name": "Shannon",
      "comment": "This is so warm and comfortable.",
      "stars": 3,
      "date": "2016-11-10T18:28:09.369Z"
    }],
  "price":12.0
}
```

## Querying the data

### Seeding the data

Once you've define the models, you need to import the data to the database.
For that, simply run the script `seeds.js` using `node`.
The seeds will also erase all previous data before the import. As it will use your own models, you may need to rerun the script if you change your models.

### Lab Exercises

Perform the different queries using the models *User* and *Product*.
The column *Function Name* in the table contains the name of the function you have to finish.

| Lab | Description | Function Name
|-----|-------------|-------
| 1 | Insert a users | `insertUser`
| 2 | List all users | `listUsers`
| 3 | Delete a user | `deleteUser`
| 4 | Insert a product | `insertProduct`
| 5 | List all products | `listProducts`
| 6 | Delete a product | `deleteProduct`
| 7 | Buy a product | `addProductToShoppingCart`
| 8| Make a review | `addReviewToProduct`

// Happy Coding! 😀