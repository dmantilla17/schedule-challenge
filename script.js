// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var saveButton=("#saveBtn");
var timeBlockEl=(".time-block");

$(document).ready(function () {
let today = dayjs();
$("#currentDay").text(today.format('D MMM YYYY'));
console.log("#currentDay");
});
  
var stringVar= "3"
  //blockHour= parseInt(divel.getAttribute)
  //console.log(stringVar == numVar)



  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  var currentHour=$(currentHour)
  //var blockHour=
  var timeBlockEl= document.querySelector
  $('.time-block').each(function(){
    var currentHour
    if(blockHour < currentHour) {
      $(currentHour).addClass("future");
      console.log(currentHour);
    }
   else if(blockHour===currentHour){
  $(currentHour).addClass("present");
}
else { $(currentHour).addClass("past");
};
  //
  // TODO: Add code to apply the past, present, or future class to each time
  var hour9Time = $('#hour-9').attr('data-time');
  console.log(hour9Time);

  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
$("saveBtn").read;
localStorage.setItem("saveBtn",input.val());
  // TODO: Add code to display the current date in the header of the page.
});
