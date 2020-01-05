//var today = new Date();
//var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
//var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//var dateTime = date+' '+time;
var container = $(".container")
var currentTime = new moment().format("h A");
$("#currentDay").text(currentTime)


//console.log(dateTime);
//console.log(moment());

//const n =moment().add(2, "hours"); 


//moment().subtract(7, 'hours');

//m.set("hour", 9)
Times = [];
for (var i = 9; i < 18; i++) {
    i += 0;
    var m = moment().set("hour", i)
    Times.push(m.format("h A"))
   
}




// Thetimes = [];
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
    // saveCol.css( " border-bottom-right-radius: 15px");

    if (Times[i]< currentTime ) {
        console.log("yes") 
        textarea.css("background-color", "grey") 
    }
    else if (Times[i] > currentTime){
        textarea.css("background-color", "green") 
    }
    else if (Times[i] = currentTime){
        textarea.css("background-color", "red") 
    }

}








// our array
var movies = ["Reservoir Dogs", "Pulp Fiction", "Jackie Brown",
    "Kill Bill", "Death Proof", "Inglourious Basterds"];

// storing our array as a string
localStorage.setItem("quentinTarantino", JSON.stringify(movies));

// retrieving our data and converting it back into an array
var retrievedData = localStorage.getItem("quentinTarantino");
var movies2 = JSON.parse(retrievedData);

//making sure it still is an array
console.log(movies2.length);

$(".saveBtn").on("click", function (event) {

    event.preventDefault();

    var activity = []

    for (var i = 0; i < usrinput.length; i++) {
        activity.push(usrinput[i].value)

        localStorage.setItem("activity", JSON.stringify(activity));
    }
});

desc = []
for (var i = 0; i < desc.length; i++) {

    var recvdata = (localStorage.getItem("activity "))
    var tfrdata = JSON.parse(recvdata)
    console.log(recvdata.length);

    infoCol.text[tfrdata[i]]
}
console.log(tfrdata);

/*console.log(Times);
var m = moment().subtract(i, "hours")
// m.hours(); // 5
// m.add(1, 'days').hours(); // 5
// m = moment(  "4:00AM" , " h:mmA")
// m = moment.utc(i+":50PM" , " h:mmA");

if (moment('2010-10-20').isBefore('2010-10-21') == false) {
    console.log("yes");

}
else {
    console.log("csd");

}
var Currenttime = ` ${m.toString()}`
var CurrenttimeS = `toString() => ${m.toString()}`
// console.log(`toString() => ${m.toString()}`);
//console.log(`toISOString() => ${m.toISOString()}`);
//console.log(Currenttime);
//console.log(CurrenttimeS);

console.log(m.format("h A"));
//console.log(m.hour(), );

v/*'8:45am', 'h:mma');
$("header").append(beginningTime.toDate())
var endTime = moment('9:00am', 'h:mma');
console.log(beginningTime.isBefore(endTime)); // true
); // Mon May 12 2014 08:45:00
console.log(endTime.toDate()); // Mon May 12 2014 09:00:00   */