// declare files as variables so we can initialize them later
var eqheights = require('./includes/eqheights');
var accordion = require('./includes/accordion');
var table = require('./includes/table');
var throttle = require('./includes/throttle');
var cookies = require('./includes/cookies');
var viewport = require('./includes/viewport');
var menu = require('./includes/menu');
var shorten = require('./includes/shorten');


// import modernizr
require('./includes/modernizr.min.js');

// viewport
new viewport();

// DOC READY
$(function (){
  new eqheights();
  new accordion();
  new table();
  new cookies();
  new menu();
  new shorten();

  // Example of using throttle
  // $(window).on('resize', throttle(function () {
  //   console.log('resize');
  // }));
});
