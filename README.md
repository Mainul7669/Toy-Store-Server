## ToyTroop Universe

This repository contains the code for the ToyTroop Universe API. It provides endpoints for managing toys and user-specific toy collections.
### API Endpoints

GET /toys: Get all toys from the database.
GET /toys/:id: Get a specific toy by its ID.
GET /MyToys: Get all toys in the user's collection.
GET /MyToys/:id: Get a specific toy from the user's collection by its ID.
POST /MyToys: Add a new toy to the user's collection.
PUT /MyToys/:id: Update a specific toy in the user's collection.
DELETE /MyToys/:id: Delete a specific toy from the user's collection.
GET /myToys/:email: Get all toys in the user's collection based on the user's email.
Database
The API uses a MongoDB database to store toy data. The connection string is configured in the code using the .env file. Make sure to replace <your-mongodb-username> and <your-mongodb-password> in the .env file with your actual MongoDB credentials.

## Tools Used

Node.js
Express.js
MongoDB
