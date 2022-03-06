// rng.js

"use strict";

const { Meal } = require('./meal');
const fs = require('fs');
const { type } = require('os');
const { debug } = require('console');

document.getElementById("continue").addEventListener("click", onClickHandler);

var mealToWrite = new Meal("", null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '');

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

/** 
 * returns what type of nutranimal gets picked, based on the values that we take in
*/
function pickAType(calories, totalFat, saturatedFat, transFat, sodium, totalCarb, fiber, totalSugar, 
    protein, potassium, vitaminA, vitaminB, vitaminC, vitaminD, calcium, iron){ //Yes, this function has 16 arguments. Too bad. (for less jank, make meal.js store these as key-value pair)
    let valuesArr = // weighting based on daily value that these are more comparable https://www.netrition.com/rdi_page.html. The units are different for all of them
    [
        (calories / 2000.0) * 100, //2000 calories daily
        (totalFat / 78.0) * 100, //78 g
        (saturatedFat / 20.0) * 100, //20g 
        (transFat / 2.0) * 100, //you really shouldn't have any of this, so it's weighted really high
        (sodium / 2300.0) * 100, //2300 mg
        (totalCarb / 275.0) * 100, //275g
        (fiber / 28.0) * 100, //28g
        (totalSugar / 50.0) * 100, //50g
        (protein / 50.0) * 100, //100g
        (potassium / 4700.0) * 100, //4700mg
        (vitaminA / 900.0) * 100, //900mcg
        (vitaminB / 1.7024) * 100, //1.7 mg and 2.4mcg, lumping together b6 and b12
        (vitaminC / 90.0) * 100, //90m
        (vitaminD / 20.0) * 100, //20mcg
        (calcium / 1300) * 100, //1300mg
        (iron / 18.0) * 100, //18mg
    ];
    // find the biggest value
    var biggestValue = 0.0;
    for (let i = 0; i < valuesArr.length; i++){
        if (valuesArr[i] > biggestValue){
            biggestValue = valuesArr[i];
        }
    }
    // based on the biggest value, determine what nutrient it was (if there happens to be a tie, pick the first one in the list). here be jank. oh well.
    switch(biggestValue){
        case valuesArr[0]:
            return "calories";
        case valuesArr[1]:
            return "totalFat";
        case valuesArr[2]:
            return "saturatedFat";
        case valuesArr[3]:
            return "transFat";
        case valuesArr[4]:
            return "sodium";
        case valuesArr[5]:
            return "totalCarb";
        case valuesArr[6]:
            return "fiber";
        case valuesArr[7]:
            return "totalSugar";
        case valuesArr[8]:
            return "protein";
        case valuesArr[9]:
            return "potassium";
        case valuesArr[10]:
            return "vitaminA";
        case valuesArr[11]:
            return "vitaminB";
        case valuesArr[12]:
            return "vitaminC";
        case valuesArr[13]:
            return "vitaminD";
        case valuesArr[14]:
            return "calcium";
        case valuesArr[15]:
            return "iron";
    }
}

/**
 * Just do the bare minimum to handle the click - so that you can use the other functions here without worrying about weird things happening that would happen
 * with the click (like navigating to the other page) 
 */
 function onClickHandler(){
    window.location.href = "stickerBook.html";
}

/*
let nutranName;
let fileLocation;
*/

// read the meal from the JSON file and add the Nutranimal to it
jsonReader('./meals.json', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        mealToWrite = data;
        let nutranName = "Nutranimal Not Found";
        let fileLocation = './assets/sad.png';
        let type = pickAType(data.calories, data.totalFat, data.saturatedFat, data.transFat, data.sodium, data.totalCarb, data.fiber, data.totalSugar, data. protein, data.potassium, data.vitaminA, data.vitaminB, data.vitaminC, data.vitaminD, data.calcium, data.iron);

        // pick name based on type
        if (type == 'iron') {
            nutranName = "Brik-Bot";
            fileLocation = './assets/brickbot.png';
        }
        if (type == 'totalCarb') {
            nutranName = "Cattatapi";
            fileLocation = './assets/cattatapi.png'
        }
        mealToWrite.nutranimalImage = fileLocation;
        mealToWrite.nutranimalName = nutranName;
        data = mealToWrite;
        console.log(data);
        document.getElementById('nutranName').innerHTML = nutranName;
        document.getElementById('nutranImage').src = fileLocation;
        fs.writeFile('./meals.json', JSON.stringify(data, null, 2), err => {
            if (err) {
                console.log(err);
            }
        });
    }
});

//TODO: less jank
//TODO: make rng random(when there is more than one animal for nutrition value).