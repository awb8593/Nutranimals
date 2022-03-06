
/** 
 * returns what type of nutranimal gets picked, based on the values that we take in
*/
function pickANutranimal(calories, totalFat, saturatedFat, transFat, sodium, totalCarb, fiber, totalSugar, 
    protein, potassium, vitaminA, vitaminB, vitaminC, vitaminD, calcium, iron){ //Yes, this function has 16 arguments. Too bad. (for less jank, make meal.js store these as key-value pair)
    let valuesArr = // weighting based on daily value that these are more comparable (rounding to an integer)
    [
        calories,
        totalFat,
        saturatedFat, 
        transFat,
        sodium,
        totalCarb,
        fiber,
        totalSugar,
        protein,
        potassium,
        vitaminA,
        vitaminB,
        vitaminC,
        vitaminD,
        calcium,
        iron
    ];
    // find the biggest value
    var biggestValue = 0;
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
console.log(pickANutranimal(9, 5, 10, 4, 0, 6, 4, 8, 
    3, 1, 6, 7, 8, 7, 7, 5));
