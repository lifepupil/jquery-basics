'use strict';
//  THIS MAKES SURE THAT ALL HTML ARE LOADED BEFORE JQUERY STUFF
// i.e. when doc is ready, call init function
$(document).ready(init);

var newNum;
var oldScreen = '';
var screenNum;
var operatorStr = '';

function init() {
  $('.number').click(numClicked);
  $('.operator').click(operClicked);
  $('#clear').click(clearClicked);
  $('#changeSign').click(clickChangeSign);
}

function clearClicked() {
  $('#screen').text('0');
  oldScreen = '';
  screenNum = '';
  newNum = '';
}

function clickChangeSign() {
  screenNum = $('#screen').text();
  var tempNum = parseFloat(screenNum) * -1;
  $('#screen').text(tempNum);
  screenNum = $('#screen').text();
}

function numClicked() {
  newNum = $(this).attr("id");
  screenNum = $('#screen').text();

  if (screenNum !== "0") {
    $('#screen').text(screenNum + newNum);
    screenNum = $('#screen').text();
  } else {
    $('#screen').text(newNum);
    screenNum = $('#screen').text();
  }

  if (operatorStr !== '' && screenNum === '') {
    $('#screen').text(screenNum + newNum);
    screenNum = $('#screen').text();
  }
}

function operClicked() {
  operatorStr = $(this).text();
  if (oldScreen === '') {
    oldScreen = screenNum;
    screenNum = '';
  } else {
    switch (operatorStr) {
      case "+":
        answer = parsefloat(oldScreen) + parsefloat(screenNum);
        $('#screen').text(answer);
        screenNum = $('#screen').text();
        oldScreen = '';
        break;
      case "-":
        answer = parsefloat(oldScreen) - parsefloat(screenNum);
        $('#screen').text(answer);
        screenNum = $('#screen').text();
        oldScreen = '';
        break;
      case "*":
        answer = parsefloat(oldScreen) + parsefloat(screenNum);
        $('#screen').text(answer);
        screenNum = $('#screen').text();
        oldScreen = '';
        break;
      case "/":
        answer = parsefloat(oldScreen) / parsefloat(screenNum);
        $('#screen').text(answer);
        screenNum = $('#screen').text();
        oldScreen = '';
        break;
      case "%":
        answer = parsefloat(oldScreen) % parsefloat(screenNum);
        $('#screen').text(answer);
        screenNum = $('#screen').text();
        oldScreen = '';
        break;
      case "=":
        answer = parsefloat(oldScreen) + parsefloat(screenNum);
        $('#screen').text(answer);
        screenNum = $('#screen').text();
        oldScreen = '';
    }
  }
}

function settext() {
  var old = $('#screen').text();
  var text = $(this).text();
  var newtxt = old + " " + text;
  $('#screen').text(newtxt);
}




// function init() {
// //   // alert('the doc is ready');
// //   $('p').addClass('fun');
// //   // crazy();
// // }
//
// // function crazy() {
// //   setInterval(function(){
// //     $('p').toggleClass('fun');
// //   }, 20);
// // }
//
// function init() {
//   $('#go').click(go);
// }
//
// function go() {
//   // alert('the go button was clicked');
//   var x = $('#x').val() * 1;
//   var oper = $('#oper').val();
//   var y = $('#x').val() * 1;
//
//   // numbers =numbers.split(',');
//
//   var result;
//   switch (oper) {
//     case "*":
//       result = x * y;
//       break;
//
//     case "/":
//       result = x / y;
//       break;
//
//     case "+":
//       result = x+y;
//       break;
//
//     case "-":
//       result = x-y;
//   }
//
//   // var result = 3;
//   // $('#n1').text(x);
//   // $('#op').text(oper);
//   // $('#n2').text(oper);
//   $('#result').text(result);
//   //
//   //
//   // $('#result').text(result);
//   // debugger;
// }
