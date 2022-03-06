// log.js
"use strict";

const fs = require('fs');

document.getElementById("saveLog").addEventListener("click", onClickHandler);
class Log {
    /**
     * Constructor for a log message
     * @param {string} message message
     * @param {int} happiness value from 0-2, for storing the emoji that is used (0 is sad, 2 is happy)
     */
    constructor(newMessage, newHappiness) {
        this.message = newMessage;
        this.happiness = newHappiness;
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

/**
 * Use this on all user text input
 * @param {string} userInput 
 * @returns string stripped of all html tags.
 */
function stripTags(userInput){
    return userInput.replace(/(<([^>]+)>)/gi, ""); //https://css-tricks.com/snippets/javascript/strip-html-tags-in-javascript/

}

function saveLog() {
    let happinessButtons = document.getElementsByName('happinessButtons');
    let happiness = -1; // -1 should never happen
    for (let i = 0; i < happinessButtons.length; i++){
        if(happinessButtons[i].checked){
            happiness = i;
        }
    }
    let newLog = new Log(document.getElementById("logText").value,happiness);
    jsonReader('./meals.json', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            data.reflection = newLog;
            fs.writeFile('./meals.json', JSON.stringify(data, null, 2), err => {
                if (err) {
                    console.log(err);
                }
            });
            console.log(data);
        }
    });

}

/**
 * Just do the bare minimum to handle the click - so that you can use the other functions here without worrying about weird things happening that would happen
 * with the click (like navigating to the other page) 
 */
 function onClickHandler(){
    saveLog();
    window.location.href = "stickerBook.html";
}

