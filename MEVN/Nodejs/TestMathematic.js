// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of Express app
const app = express();

// Use body-parser middleware for parsing incoming JSON data
app.use(bodyParser.json());

// Define a function to calculate the area of a circle
function calculateArea(radius) {
  const area = Math.PI * Math.pow(radius, 2);
  return area;
}

// Define an endpoint for calculating the area of a circle
app.post('/calculate-area', (req, res) => {
  // Get the radius from the request body
  const radius = req.body.radius;

  // Calculate the area of the circle
  const area = calculateArea(radius);

  // Return the result as a JSON object
  res.json({ area });
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
