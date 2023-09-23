$(function calender() {
  // these const are setting up the variables for the function and the parse is allowing me to use "===" in the if statement down there
  const currentHour = parseInt(dayjs().format("HH"));
  const startHour = 9;
  const endHour = 17;
// This current day is utilizing the dayjs and the format of the different ways to put the date
  $('#currentDay').text(dayjs().format('MMMM D, YYYY'));
// this for loop allows the code to get each different hour and add a class that labels them past present and future that colors them appropriatly depending on what the time is
  for (let i = startHour; i <= endHour ; i++) {
    const hours = $('#hour-' + i);
    const textHours = $('#hour-' + i + '-text');
    const buttonHours = $('#hour-' + i + '-button');
// This is adding the classes
    if (i < currentHour) {
      hours.addClass("past");
    } if (i === currentHour) {
      hours.addClass("present");
    } if (i > currentHour) {
      hours.addClass("future");
    }
// this is setting the text into local storage and make sit display on the page
    buttonHours.on('click', function() {
      const userText = textHours.val();
      localStorage.setItem('textHour' + i, userText);
    });
    // this is getting the text from local storage and keeping it on the page even after a refresh
    const storedText = localStorage.getItem('textHour' + i);
    if (storedText) {
      textHours.val(storedText);
    }
  }
});