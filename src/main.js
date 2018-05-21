import { simon } from './simon';
import './styles.css';


var simonArr = [];
var playerArr = [];

function getRandomColor(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) +min;
}

$(document).ready(function() {
  $('#start').click(function(event) {
    event.preventDefault();
    var playGame = getRandomColor(1,4);
    var currentColor = 0;
    var initialColor = 0 + playGame;
    simonArr.push(initialColor);

      if (initialColor == 1){
        simonArr.push("red");
      } else if (initialColor == 2) {
        simonArr.push("red");
      } else if (initialColor == 3) {
        simonArr.push("yellow");
      } else {
        simonArr.push("blue");
      }
    });
    console.log(simonArr);

      simonArr.forEach(function(color) {

          if (color == "red") {
            $("#red-image").toggle();
          } else if (color == "green") {
            $("#green-image").toggle();
          } else if (color == "green") {
            $("#yellow-image").toggle();
          } else {
            $("#blue-image").toggle();
          }
      });




  $("button#red").click(function(event) {
    event.preventDefault();
    playerArr.push("red");
  });
  $("button#green").click(function(event) {
    event.preventDefault();
    playerArr.push("green");
  });
  $("button#yellow").click(function(event) {
    event.preventDefault();
    playerArr.push("yellow");
  });
  $("button#blue").click(function(event) {
    event.preventDefault();
    playerArr.push("blue");
  });


  $('#compare').click(function(event) {
    event.preventDefault();
    for(var i=0; i < simonArr.Length; i++) {
      for (var j=0; j < playerArr.Length; i++) {
        if (simonArr[i] == playerArr[j]){
          $('#start').toggle();
        } else {
          simonArr = [];
          playerArr = [];
        }
      }
    }
  });


});
