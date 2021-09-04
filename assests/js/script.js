timeBlockArr = ["9 AM","10 AM", "11 AM","12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];



var currentHour= moment().format('h A').trim();

var dateP = document.getElementById("currentDay");

var currentDate= moment().format("MMMM Do, YYYY h:mm A");
function displayDate () {
    dateP.innerHTML = currentDate;
}
console.log(currentDate);
function scheduleTemplate() {
for(var i=0; i<timeBlockArr.length; i++){
    var constTime = timeBlockArr[i];

    //create Row Div
    var timeBlockDiv = document.createElement("div");
    timeBlockDiv.setAttribute("class","row time-block");
    timeBlockDiv.setAttribute("id", "row")
    //create hour col
    var timeBlockHr = document.createElement("div");
    timeBlockHr.setAttribute("class","col-2 hour");
    timeBlockHr.innerHTML = constTime;
    //create text area
    var timeBlockText = document.createElement("textarea");
    timeBlockText.setAttribute("class", "col-8 description textarea future");
    timeBlockText.setAttribute("id", "task[i]");
    //create button
    var timeBlockBtn = document.createElement("button");
    timeBlockBtn.setAttribute("type", "submit");
    timeBlockBtn.setAttribute("id", "saveBtn");
    timeBlockBtn.setAttribute("class","col-2 saveBtn");
    
    //add save icon
    var saveIcon = document.createElement("i");
    saveIcon.setAttribute("class", "fas fa-save");


    $(".container").append(timeBlockDiv, timeBlockHr, timeBlockText, timeBlockBtn);

    timeBlockDiv.appendChild(timeBlockHr)
    timeBlockDiv.appendChild(timeBlockText) 
    timeBlockDiv.appendChild(timeBlockBtn);

    timeBlockBtn.appendChild(saveIcon);

    if (constTime  ==currentHour) {
        return "it worked";
        // timeBlockText.setAttribute("class", "col-8 description textarea present")
    // } else if (constTime > className) {
    //     textAreaEl.className += "past"
    // } else {
    //     textAreaEl.className =+ "future"
    };
};
console.log(currentHour);
};
var textAreaEl = document.getElementById("task")
$("#saveBtn").on("click","btn", function(){
    console.log(textAreaEl.value);
})
console.log(textAreaEl); 

scheduleTemplate();
displayDate();



