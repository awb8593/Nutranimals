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

// reads from a json file, updates the data, and writes back
jsonReader('./meals.json', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        data.calories += 10;
        fs.writeFile('./meals.json', JSON.stringify(data, null, 2), err => {
            if (err) {
                console.log(err);
            }
        });
    }
});