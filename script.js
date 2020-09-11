
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





