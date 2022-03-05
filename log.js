class Log {
    /**
     * Constructor for a log message
     * @param {string} message message
     * @param {int} happiness value from 0-2, for storing the emoji that is used
     */
    constructor(newMessage, newHappiness) {
        this.message = newMessage;
        this.happiness = newHappiness;
    }
}
function stripTags(userInput){
    return userInput.replace(/(<([^>]+)>)/gi, "");

}
function saveLog() {
    let newLog = new Log(document.getElementById("logText").value, 0);
    document.getElementById("logMessage").innerHTML = newLog.message;
}
