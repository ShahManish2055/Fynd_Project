// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');
// mongoose.set('strictQuery', false);

// app.listen(9992, function check(err) {
//   if (err)
//     console.log("error")
//   else
//     console.log("started")
// });

// // Update connection code using Promise-based syntax
// mongoose.connect("mongodb://localhost:27017/vue-db", { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log("Successfully connected to DB");
//   })
//   .catch((error) => {
//     console.log("Error connecting to DB", error);
//   });

// // Or update connection code using async/await
// async function connectToDB() {
//   try {
//     await mongoose.connect("mongodb://localhost:27017/vue-db", { useNewUrlParser: true, useUnifiedTopology: true });
//     console.log("Successfully connected to DB");
//   } catch (error) {
//     console.log("Error connecting to DB", error);
//   }
// }

// connectToDB();
