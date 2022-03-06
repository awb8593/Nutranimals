// meal.js
"use strict";

const fs = require('fs');


// class for a Meal object
class Meal {
    constructor(name, reflection, calories, totalFat, saturatedFat, transFat, sodium, totalCarb, fiber, totalSugar, 
        protein, potassium, vitaminA, vitaminB, vitaminC, vitaminD, calcium, iron) {
        this.name = name;
        this.reflection = reflection;
        this.calories = calories;
        this.totalFat = totalFat;
        this.saturatedFat = saturatedFat;
        this.transFat = transFat;
        this.sodium = sodium;
        this.totalCarb = totalCarb;
        this.totalSugar = totalSugar;
        this.fiber = fiber;
        this.protein = protein;
        this.potassium = potassium;
        this.vitaminA = vitaminA;
        this.vitaminB = vitaminB;
        this.vitaminC = vitaminC;
        this.vitaminD = vitaminD;
        this.calcium = calcium;
        this.iron = iron;
    }

}

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

// get the nutritional values
function getNutrition() {
    var nameField = document.getElementById('meal-name').value;
    console.log("Meal Saved: ", nameField);

    // make a new meal with the nutritional attributes
    let newMeal = {
        name: nameField,
        reflection: null,
        calories: 500,
        totalFat: 10,
        saturatedFat: 10,
        transFat: 10,
        sodium: 10,
        totalCarb: 10,
        totalSugar: 10,
        fiber: 10,
        protein: 10,
        potassium: 10,
        vitaminA: 10,
        vitaminB: 10,
        vitaminC: 10,
        vitaminD: 10,
        calcium: 10,
        iron: 10
    }

    save(newMeal);
}
/**
 * Just do the bare minimum to handle the click - so that you can use the other functions here without worrying about weird things happening that would happen
 * with the click (like navigating to the other page) 
 */
function onClickHandler(){
    getNutrition();
    window.location.href = "stickerBook.html";
}

// save the user's meal into the json file
function save(newMeal) {
    // reads from a json file (data = the meal in the list), updates the data, and writes back
    jsonReader('./meals.json', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            data = newMeal;
            fs.writeFile('./meals.json', JSON.stringify(data, null, 2), err => {
                if (err) {
                    console.log(err);
                }
            });
        }
    });
}

module.exports = { Meal }
let submitBtn = document.getElementById('saveButton');
if (submitBtn != null){ //squelching an error when meal gets called from stickerBook ('saveButton' is no longer in the dom)
    submitBtn.addEventListener('click', onClickHandler);
}