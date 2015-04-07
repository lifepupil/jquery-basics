'use strict';
//  THIS MAKES SURE THAT ALL HTML ARE LOADED BEFORE JQUERY STUFF
// i.e. when doc is ready, call init function
$(document).ready(init);

function init() {
  $('.article').click(settext);
  $('.noun').click(settext);
  $('.verb').click(settext);
  $('.adjective').click(settext);
  $('#clear').click(clear);
}

function clear() {
  $('#sentence').text('');
}

function article() {

}

function settext() {
  var old = $('#sentence').text();
  var text = $(this).text();
  var newtxt = old + " " + text;
  $('#sentence').text(newtxt);
}

function adjective() {

}

function verb() {

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
