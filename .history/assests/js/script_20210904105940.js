timeBlockArr = ["9 AM","10 AM", "11 AM","12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];

var taskArr = [];

var currentHour= moment().format('H');

var dateP = document.getElementById("currentDay");

var currentDate= moment().format("MMMM Do, YYYY");
function displayDate () {
    dateP.innerHTML = currentDate;
}
console.log(currentDate);
//load scheudle template

for(var i=0; i<timeBlockArr.length; i++){
    var constTime = timeBlockArr[i];

    var hour = moment().set("hour", 9).format('H');
    var setHour = moment(hour, 'H').add(i, "hours").format('H');

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
    timeBlockText.setAttribute("class", "col-8 description textarea");
    timeBlockText.setAttribute("id", "task" + i)


    //create button

    var timeBlockBtn = document.createElement("button");
    timeBlockBtn.setAttribute("type", "submit");
    timeBlockBtn.setAttribute("id", i);
    timeBlockBtn.setAttribute("class","col-2 saveBtn");

    
    //add save icon

    var saveIcon = document.createElement("i");
    saveIcon.setAttribute("class", "fas fa-save");


    $(".container").append(timeBlockDiv, timeBlockHr, timeBlockText, timeBlockBtn);

    timeBlockDiv.appendChild(timeBlockHr)
    timeBlockDiv.appendChild(timeBlockText) 
    timeBlockDiv.appendChild(timeBlockBtn);

    timeBlockBtn.appendChild(saveIcon);

    //run time check

    auditTask(setHour);
};

function auditTask (setHour) {

    //TO DO: figure out why 9Am is being set to "future" even if past
    console.log(setHour, currentHour);

    if (+setHour < +currentHour) {
        timeBlockText.classList = "col-8 description textarea past"
    }
    else if (+setHour > +currentHour) {
        timeBlockText.classList = "col-8 description textarea future"
    } else { 
        timeBlockText.classList ="col-8 description textarea present"
 
    };
}
// save to local storage
function saveTask(e) {
    var key = e.target.getAttribute("id");
    console.log(e.target);
    console.log(e.target.previousSibling.value);
    var value = e.target.previousSibling.value;


    localStorage.setItem(key, value);

}
//load from local storage to page
function loadTask() {
    document.querySelectorAll(".textarea")
    // for(var i=0; i < 9; i++) {

    //     $("#task" + i).val(localStorage.getItem(i))
    // }

}

displayDate();

var textAreaEl = document.querySelectorAll(".textarea")
// how to tie each button to a specific row. how to tie each response to a specific row and reflect all of that in localstorage
var saveBtnEl = document.querySelectorAll(".saveBtn");
saveBtnEl.forEach(saveBtnEl => {
    saveBtnEl.addEventListener("click", function(e){
        saveTask(e);

    });
});

loadTask();
console.log(currentHour);






