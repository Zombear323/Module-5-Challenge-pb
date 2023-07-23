// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var timeSlot1 = $('#hour-9')
var timeSlot2 = $('#hour-10')
var timeSlot3 = $('#hour-11')
var timeSlot4 = $('#hour-12')
var timeSlot5 = $('#hour-1')
var timeSlot6 = $('#hour-2')
var timeSlot7 = $('#hour-3')
var timeSlot8 = $('#hour-4')
var timeSlot9 = $('#hour-5')

var timeLine = [timeSlot1, timeSlot2, timeSlot3, timeSlot4, timeSlot5, timeSlot6, timeSlot7, timeSlot8, timeSlot9]


var time = dayjs().format('H');
var date = dayjs().format('MMMM D, YYYY');
console.log(time);
console.log(date);

for (let index = 9; index < time; index++) {
  var done = index - 9
  console.log(done)
  // timeLine[done].addClass('past');  
};



  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.