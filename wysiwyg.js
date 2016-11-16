"use strict";

// 1. get the data
var output = document.getElementById('container');
var userInput = document.getElementById('input');


function getPeople () {

    for (var i = 0; i < famous.length; i++) {
      var myPerson = famous[i];
      var cards = `<div class="allCards"><header>${myPerson.name}</header>
                  <section>${myPerson.bio}</section>
                  <img src=${myPerson.image}></div>`;

      output.innerHTML += cards;
   } /*end of for loop */

   addBackground();
   dottedBorder();

} /* end of getPeople function */


function addBackground() {
  var getAllCards = document.getElementsByClassName("allCards");
    for (var i = 0; i < getAllCards.length; i++) {

      if(i % 2 === 0) {
        getAllCards[i].classList.add("blue");
      } else {
        getAllCards[i].classList.add("yellow");
    }
  }
} /* end of addBackground function */


function dottedBorder() {
  var getAllCards = document.getElementsByClassName("allCards");

  for (var i = 0; i < getAllCards.length; i++) {
  var currentCard = getAllCards[i];
    currentCard.addEventListener("click", function() {
      this.classList.toggle("dots");
        // event.target would work here too
    input.focus(); /* <- puts cursor in input box   */
    mirrorText(this);
    }) /*end of listener function */
  } /* end of for loop */
} /* end of dottedBorder function */



function mirrorText(currentCard) { /* pulling currentCard from 'this' in dottedBorder function */
  userInput.addEventListener("keyup", function(event) {
    if (currentCard.classList.contains("dots")) {
      currentCard.querySelector("section").innerHTML = userInput.value;
          }
          // else if (event.keycode === 13) {
          //   userInput.value = "";
      })
    }




// when press enter key, then input value should clear




getPeople(); /* last function to be called on this page - runs everything */









