// meal.js

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
    var caloriesField = document.getElementById('calories').value;
    var fatField = document.getElementById('fat').value;
    var satField = document.getElementById('saturatedFat').value;
    var transField = document.getElementById('transFat').value;
    var sodiumField = document.getElementById('sodium').value;
    var carbField = document.getElementById('totalCarb').value;
    var sugarField = document.getElementById('totalSugar').value;
    var fiberField = document.getElementById('fiber').value;
    var proteinField = document.getElementById('protein').value;
    var potassiumField = document.getElementById('potassium').value;
    var vitAField = document.getElementById('vitA').value;
    var vitBField = document.getElementById('vitB').value;
    var vitCField = document.getElementById('vitC').value;
    var vitDField = document.getElementById('vitD').value;
    var calciumField = document.getElementById('calcium').value;
    var ironField = document.getElementById('iron').value;
    console.log("Meal Saved: ", nameField);

    // make a new meal with the nutritional attributes
    newMeal = {
        name: nameField,
        reflection: null,
        calories: caloriesField,
        totalFat: fatField,
        saturatedFat: satField,
        transFat: transField,
        sodium: sodiumField,
        totalCarb: carbField,
        totalSugar: sugarField,
        fiber: fiberField,
        protein: proteinField,
        potassium: potassiumField,
        vitaminA: vitAField,
        vitaminB: vitBField,
        vitaminC: vitCField,
        vitaminD: vitDField,
        calcium: calciumField,
        iron: ironField
    }

    save(newMeal);
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
var submitBtn = document.getElementById('saveButton');
submitBtn.addEventListener('click', getNutrition);