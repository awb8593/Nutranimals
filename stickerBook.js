const { fs } = require('fs');

var mealsList = [];

// read the meals json file to get the current meals
fs.readFile("./meals.json", (err, mealString) => {
    if (err) {
        console.log("File read failed: ", err);
        return;
    }
    try {
        data = JSON.parse(mealString); // the list of meals
        console.log("meals list is: ", mealString);
      } catch (err) {
        console.log("Error parsing JSON string:", err);
      }
});

let list = document.getElementById("mealsList");
data.array.forEach(element => {
    let li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
});r