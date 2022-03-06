
/** 
 * returns what type of nutranimal gets picked, based on the values that we take in
*/
"use strict";
function pickANutranimal(calories, totalFat, saturatedFat, transFat, sodium, totalCarb, fiber, totalSugar, 
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

//TODO: less jank
//TODO: make rng random(when there is more than one animal for nutrition value).