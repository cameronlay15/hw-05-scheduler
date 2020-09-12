
// Get the day to display
$(document).ready(function(){
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
})
for(i=9; i<18;i++){
    

   function amPm(hours) {
    //    assigns pm/am based on if hours is greater than or equal to 12
       var ampm= hours >= 12 ? 'PM' : 'AM';
    //  sets hours back to 1 after 12
       hours=hours%12;
    // sets noon as 12
       hours=hours ? hours : 12;
    // returns if the hours are am or pm
       return hours + ampm;
   }
amPm()
}
$(function() {});

// today is the current day
var today = moment().format("dddd, MMMM Do");

// now is the current hour
var now = moment().format("H A");

// planWorkday entries for each hour of the workday
var planWorkday = [
	{ time: "9 AM", event: "" },
	{ time: "10 AM", event: "" },
	{ time: "11 AM", event: "" },
	{ time: "12 PM", event: "" },
	{ time: "1 PM", event: "" },
	{ time: "2 PM", event: "" },
	{ time: "3 PM", event: "" },
	{ time: "4 PM", event: "" },
	{ time: "5 PM", event: "" }
];
console.log(now)




