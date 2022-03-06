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

var mealsList = [];

fs.readFile('./meals.json', 'utf-8', (err, jsonString) => {
    if(err) {
        console.log(err);
    } else {
        try {
            const data = JSON.parse(jsonString);
            console.log(data.name);
        } catch (err) {
            console.log('Error parsing JSON', err);
        }
    }
});

const newMeal = {
    name: 'New Meal',
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
};

fs.writeFile('./newmeal.json', JSON.stringify(newMeal, null, 2), err => {
    if (err) {
        console.log(err);
    } else {
        console.log('File succesfully written');
    }
});

/*
// create a new meal
currentMeal = new Meal(" ", null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

let btnSave = document.querySelector('#btn-save');
let mealName = document.querySelector('#meal-name');

// when save is clicked, update the new meal's values and add it to the list of meals
btnSave.addEventListener('click', () =>{
    currentMeal.name = mealName;
    mealsList.push(currentMeal);
    fs.writeFile("./meals.json", JSON.stringify(mealsList, err => { // write the meals list back to the JSON file
        if (err) console.log("Error writing file: ", err)
    }))
})
*/