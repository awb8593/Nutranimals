// meal.js
"use strict";

const fs = require('fs');


// class for a Meal object
class Meal {
    constructor(name, reflection, calories, totalFat, saturatedFat, transFat, sodium, totalCarb, fiber, totalSugar, 
        protein, potassium, vitaminA, vitaminB, vitaminC, vitaminD, calcium, iron, nutranimal) {
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
        this.nutranimal = nutranimal;
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
    if (document.getElementById('meal-name').value){
        var nameField = document.getElementById('meal-name').value;
    } else { var nameField = "Unnamed Meal"; }
    if (document.getElementById('calories').value){
        var caloriesField = document.getElementById('calories').value;
    } else { var caloriesField = 0; }
    if (document.getElementById('fat').value){
        var fatField = document.getElementById('fat').value;
    } else { var fatField = 0; }
    if (document.getElementById('saturatedFat').value){
        var satField = document.getElementById('saturatedFat').value;
    } else { var satField = 0; }
    if (document.getElementById('transFat').value){
        var transField = document.getElementById('transFat').value;
    } else { var transField = 0; }
    if (document.getElementById('sodium').value){
        var sodiumField = document.getElementById('sodium').value;
    } else { var sodiumField = 0; }
    if (document.getElementById('totalCarb').value){
        var carbField = document.getElementById('totalCarb').value;
    } else { var carbField = 0; }
    if (document.getElementById('totalSugar').value){
        var sugarField = document.getElementById('totalSugar').value;
    } else { var sugarField = 0; }
    if (document.getElementById('fiber').value){
        var fiberField = document.getElementById('fiber').value;
    } else { var fiberField = 0; }
    if (document.getElementById('protein').value){
        var proteinField = document.getElementById('protein').value;
    } else { var proteinField = 0; }
    if (document.getElementById('potassium').value){
        var potassiumField = document.getElementById('potassium').value;
    } else { var potassiumField = 0; }
    if (document.getElementById('vitA').value){
        var vitAField = document.getElementById('vitA').value;
    } else { var vitAField = 0; }
    if (document.getElementById('vitB').value){
        var vitBField = document.getElementById('vitB').value;
    } else { var vitBField = 0; }
    if (document.getElementById('vitC').value){
        var vitCField = document.getElementById('vitC').value;
    } else { var vitCField = 0; }
    if (document.getElementById('vitD').value){
        var vitDField = document.getElementById('vitD').value;
    } else { var vitDField = 0; }
    if (document.getElementById('calcium').value){
        var calciumField = document.getElementById('calcium').value;
    } else { var calciumField = 0; }
    if (document.getElementById('iron').value){
        var ironField = document.getElementById('iron').value;
    } else { var ironField = 0; }
    console.log("Meal Saved: ", nameField);

    // make a new meal with the nutritional attributes
    let newMeal = {
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
        iron: ironField,
        nutranimal: null
    }

    save(newMeal);
}
/**
 * Just do the bare minimum to handle the click - so that you can use the other functions here without worrying about weird things happening that would happen
 * with the click (like navigating to the other page) 
 */
function onClickHandler(){
    getNutrition();
    window.location.href = "log.html";
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