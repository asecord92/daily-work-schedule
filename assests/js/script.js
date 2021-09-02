timeBlockArr = ["9AM","10AM", "11AM","12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

var container =$(".container")

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
    timeBlockText.setAttribute("class", "col-8 description textarea");
    timeBlockText.setAttribute("id", "description");
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
};





    
