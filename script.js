/*
Name: Fredielou <Barla>
File: Wild Rescues.js
Date: February 20, 2025
*/

/* Hamburger menu function */
function hamburger() {
  var navlinks = document.getElementById("nav-links");
  var menuicon = document.getElementById("icon");

  // Toggle the display of the menu
  if (navlinks.style.display === "block") {
    navlinks.style.display = "none";
    menuicon.style.color = "#2a1f14"; // Icon color when closed
  } else {
    navlinks.style.display = "block";
    menuicon.style.color = "#f6ee4"; // Icon color when open
  }
}

// Global variables for displaying answers
var answer = document.querySelector("#answer p");
var heading = document.querySelector("#answer h2"); // Corrected query selector (added #)

// Function to display first answer
function ans1() {
  heading.style.display = "block";
  answer.textContent =
    "Step back and observe the situation for a few minutes. Wait to see if a parent arrives. If the animal is in immediate danger from a predator or is in the road, remove the baby and bring it to a rescue center.";
}

// Function to display second answer
function ans2() {
  heading.style.display = "block";
  answer.textContent =
    "You cannot tell if an animal has rabies simply by seeing it. A test must be performed to determine if an animal has rabies. Do not approach wildlife that you suspect might be rabid. Contact us to have the animal removed.";
}

// Function to display third answer
function ans3() {
  heading.style.display = "block";
  answer.textContent =
    "No. This is a myth. The parents will retrieve the baby bird and place it back in its nest. If the parents do not return, contact us.";
}

// Function to display fourth answer
function ans4() {
  heading.style.display = "block";
  answer.textContent =
    "We need volunteers to help feed animals, care for animals, and clean animal pens. We also accept donations.";
}
