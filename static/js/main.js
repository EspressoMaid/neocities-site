// takes users time in hours and changes japanese greeting in the title accordingly
function titleGreet() {
  // initilizes array with japanese greetings
  let greeting = ["おはよう", "こんにちは", "こんばんは"];
  // creates new date object
  let currentDate = new Date();
  // gets current hours from date object
  let time = currentDate.getHours();
  // get title element
  let titleEl = document.getElementById("title");
  //if it is earlier than 12 pm clock display morning in japanese
  if (time < 12) {
    titleEl.innerHTML = greeting[0];
  }
  // if 6 pm or earlier display good day in japanese
  else if (time <= 18) {
    titleEl.innerHTML = greeting[1];
  }
  // else display good evening
  else {
    titleEl.innerHTML = greeting[2];
  }
}

//Mobile Responive menu
function navMenu() {
  // Get menu button and menu
  let navMenu = document.getElementById("primary-nav");
  let menuBtnEl = document.getElementById("menu-btn");
  // add on click listener to menu button
  menuBtnEl.addEventListener("click", () => {
    // if menu is shown -> hide, else -> show
    navMenu.classList.toggle("hidden");
  });
}

// Main function
function main() {
  titleGreet();
  navMenu();
}

main();
