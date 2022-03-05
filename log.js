document.getElementById("saveLog").addEventListener("click", saveLog);
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
    for (i = 0; i < happinessButtons.length; i++){
        if(happinessButtons[i].checked){
            happiness = i;
        }
    }
    let newLog = new Log(document.getElementById("logText").value,happiness);
    document.getElementById("logMessage").innerHTML = newLog.message.concat(happiness);

}