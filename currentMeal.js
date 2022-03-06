// currentMeal.js

"use strict";
const fs = require('fs');
const { Meal } = require('./meal');

var mealToDisplay = new Meal("", null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

// function to help read a json file
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
        document.title = mealToDisplay.name;
        document.getElementById('header').innerHTML = mealToDisplay.name;
        document.getElementById('reflect').innerHTML = mealToDisplay.reflection.message;
        // update rest of the values
        document.getElementById('calories').innerHTML = mealToDisplay.calories;
        document.getElementById('totalFat').innerHTML = mealToDisplay.totalFat;
        document.getElementById('satFat').innerHTML = mealToDisplay.saturatedFat;
        document.getElementById('transFat').innerHTML = mealToDisplay.transFat;
        document.getElementById('sodium').innerHTML = mealToDisplay.sodium;
        document.getElementById('carbs').innerHTML = mealToDisplay.totalCarb;
        document.getElementById('sugar').innerHTML = mealToDisplay.totalSugar;
        document.getElementById('fiber').innerHTML = mealToDisplay.fiber;
        document.getElementById('protein').innerHTML = mealToDisplay.protein;
        document.getElementById('potassium').innerHTML = mealToDisplay.potassium;
        document.getElementById('vitA').innerHTML = mealToDisplay.vitaminA;
        document.getElementById('vitB').innerHTML = mealToDisplay.vitaminB;
        document.getElementById('vitC').innerHTML = mealToDisplay.vitaminC;
        document.getElementById('vitD').innerHTML = mealToDisplay.vitaminD;
        document.getElementById('calcium').innerHTML = mealToDisplay.calcium;
        document.getElementById('iron').innerHTML = mealToDisplay.iron;
    }
});
