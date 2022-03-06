// currentMeal.js

"use strict";
const fs = require('fs');
const { Meal } = require('./meal');

var mealToDisplay = new Meal("", null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

// function to help read a json file (returns the meal stored in the json file)
function jsonReader(filepath, cb) {
  fs.readFile(filepath, 'utf-8', (err, fileData) => {
      if (err) {
          return cb && cb(err);
      }
      try {
          const object = JSON.parse(fileData);
          return cb && cb(null, object);
      } catch (err) {
          return cb && cb(err);
      }
  });
}

// read the meal to display from the JSON file
jsonReader('./meals.json', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        mealToDisplay = data;
        console.log("Meal: ", mealToDisplay);
        document.getElementById('window').innerHTML = mealToDisplay.name;
        document.getElementById('header').innerHTML = mealToDisplay.name;
        document.getElementById('calories').innerHTML = "Calories: ", mealToDisplay.calories;
    }
});

// update rest of the values
