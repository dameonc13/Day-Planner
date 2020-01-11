
var container = $(".container")

//Adds current date and time to the header
var currentTime = new moment().format("HH mm A");
var currentDate = new moment().format("MM-DD-YYYY")
$("#currentDay").text( currentDate)
$("header").append( currentTime)




// appends the hours to the Times array  using a for loop
Times = [];
for (var i = 9; i < 18; i++) {
    i += 0;
    var m = moment().set("hour", i)
    Times.push(m.format("HH A"))
   
}




// for loop used to create the timeblocks for the Day Planner
for (var i = 0; i < Times.length; i++) {
    i += 0;
    var textarea = $("<textarea/>", {
        id: "usrinput" + i,
        type: "text",
        rows: '4',

    })
    var div = $("<div>");
    var timeCol = $("<div>");
    var infoCol = $("<div>");
    var saveCol = $("<div>");
    var form = $("<div>");
    var I = $("<i>");
    timeCol.text(Times[i]);
    div.append(timeCol, infoCol, saveCol);
    form.append(textarea);
    saveCol.append(I);
    infoCol.append(form);
    container.append(div);
    textarea.addClass("form-control");
    form.addClass("form-group");
    div.addClass("row");
    timeCol.addClass("col col-md-2 hour ");
    infoCol.addClass("col col-md-9 ");
    saveCol.addClass("fa fa-save")
    saveCol.addClass("col col-md-1 saveBtn")
    
// Apply  a specific color to each timeblock depending on what the current time is  
    if (Times[i] < currentTime) {
        
        textarea.addClass("past") 
    }
    else if (Times[i] > currentTime){
        textarea.addClass("present")
    }
    else if (Times[i] == currentTime){
        textarea.addClass("future")
    }


}


// takes user input and saves it to local storage

$(".saveBtn").on("click", function (event) {

    event.preventDefault();

    localStorage.setItem("input0", usrinput0.value );
    localStorage.setItem("input1", usrinput1.value );
    localStorage.setItem("input2", usrinput2.value );
    localStorage.setItem("input3", usrinput3.value );
    localStorage.setItem("input4", usrinput4.value );
    localStorage.setItem("input5", usrinput5.value );
    localStorage.setItem("input6", usrinput6.value );
    localStorage.setItem("input7", usrinput7.value );
    localStorage.setItem("input8", usrinput8.value ); 


});

// user input is  stores to a variable for each hour

    var recvdata0 = localStorage.getItem("input0")
    var recvdata1 = localStorage.getItem("input1")
    var recvdata2 = localStorage.getItem("input2")
    var recvdata3 = localStorage.getItem("input3")
    var recvdata4 = localStorage.getItem("input4")
    var recvdata5 = localStorage.getItem("input5")
    var recvdata6 = localStorage.getItem("input6")
    var recvdata7 = localStorage.getItem("input7")
    var recvdata8 = localStorage.getItem("input8")
    

// appends text to time-blocks which stays there even when the page refreshes until save button is clicked again
    $("#usrinput0").text(recvdata0)
    $("#usrinput1").text(recvdata1)
    $("#usrinput2").text(recvdata2)
    $("#usrinput3").text(recvdata3)
    $("#usrinput4").text(recvdata4)
    $("#usrinput5").text(recvdata5)
    $("#usrinput6").text(recvdata6)
    $("#usrinput7").text(recvdata7)
    $("#usrinput8").text(recvdata8)
   
      
 
 
    

   



