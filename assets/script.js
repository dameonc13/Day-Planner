
var container = $(".container")

//Adds current date and time to the header
var currentTime = new moment().format("HH A");
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
        id: "usrinput",
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
    div.addClass("row justify-content-md-center");
    timeCol.addClass("col col-md-2 hour ");
    infoCol.addClass("col col-md-8  ");
    saveCol.addClass("fa fa-save")
    form.addClass("col col-md-12  ")
    saveCol.addClass("col col-md-2 saveBtn")
    
// Apply  a specific color to each timeblock depending on what the current time is  
    if (Times[i] < currentTime) {
        
        textarea.css("background-color", "grey") 
    }
    else if (Times[i] > currentTime){
        textarea.css("background-color", "green") 
    }
    else if (Times[i] == currentTime){
        textarea.css("background-color", "red") 
    }


}







// takes user input and saves it to local storage

$(".saveBtn").on("click", function (event) {

    event.preventDefault();

    var activity = ''

    for (var i = 0; i < usrinput.length; i++) {
        activity = (usrinput.value)

        localStorage.setItem("activity", activity );
    }

console.log( activity);
});

tfrdata = []
for (var i = 0; i < Times.length; i++) {

    var recvdata = (localStorage.getItem("activity "))
     tfrdata.push(JSON.parse(recvdata))
    

    infoCol.text[tfrdata[i]]
}
console.log( recvdata);


