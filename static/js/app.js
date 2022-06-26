// Randomly select an episode number for Star Wars
var text = d3.select(".star-wars")
  .text(Math.floor(Math.random() * 8) + 1);

// Select the upvote and downvote buttons
//var upvote = d3.select(".upvote");
//var downvote = d3.select(".downvote");

var n0 = d3.select(".calc_button0");
var n1 = d3.select(".calc_button1");
var n2 = d3.select(".calc_button2");
var n3 = d3.select(".calc_button3");
var n4 = d3.select(".calc_button4");
var n5 = d3.select(".calc_button5");
var n6 = d3.select(".calc_button6");
var n7 = d3.select(".calc_button7");
var n8 = d3.select(".calc_button8");
var n9 = d3.select(".calc_button9");
var n_dot = d3.select(".calc_button_dot");
var op_add = d3.select(".func_button_add");
var op_sub = d3.select(".func_button_sub");
var op_mul = d3.select(".func_button_mul");
var op_div = d3.select(".func_button_div");
var op_eq = d3.select(".func_button_eq");

console.log(parseInt(n1.text()))
// Select the counter h1 element
var counter = d3.select(".counter");
var firstCount = 0
var currentOp = 0
// Use D3 `.on` to attach a click handler for the upvote
n1.on("click", function() {
  // Select the current count
  var currentCount = counter.text();
  currentCount = currentCount.replace(/^0+/,'');
  currentCount = currentCount + '1';

  counter.text(currentCount);
});

n2.on("click", function() {
  var currentCount = counter.text();
  currentCount = currentCount.replace(/^0+/,'');
  currentCount = currentCount + '2';

  counter.text(currentCount);
});

n3.on("click", function() {
  var currentCount = counter.text();
  currentCount = currentCount.replace(/^0+/,'');
  currentCount = currentCount + '3';

  counter.text(currentCount);
});

n4.on("click", function() {
  var currentCount = counter.text();
  currentCount = currentCount.replace(/^0+/,'');
  currentCount = currentCount + '4';

  counter.text(currentCount);
});

n5.on("click", function() {
  var currentCount = counter.text();
  currentCount = currentCount.replace(/^0+/,'');
  currentCount = currentCount + '5';

  counter.text(currentCount);
});
n6.on("click", function() {
  var currentCount = counter.text();
  currentCount = currentCount.replace(/^0+/,'');
  currentCount = currentCount + '6';

  counter.text(currentCount);
});
n7.on("click", function() {
  var currentCount = counter.text();
  currentCount = currentCount.replace(/^0+/,'');
  currentCount = currentCount + '7';

  counter.text(currentCount);
});
n8.on("click", function() {
  var currentCount = counter.text();
  currentCount = currentCount.replace(/^0+/,'');
  currentCount = currentCount + '8';

  counter.text(currentCount);
});
n9.on("click", function() {
  // Select the current count
  var currentCount = counter.text();
  currentCount = currentCount.replace(/^0+/,'');
  currentCount = currentCount + '9';

  counter.text(currentCount);
});
n_dot.on("click", function() {
  // Select the current count
  var currentCount = String(parseFloat(counter.text()));
  currentCount = currentCount.replace(/^0+/,'');
  if (currentCount.includes('.')) {

  }
  else {
    currentCount = currentCount + '.';
  }

  counter.text(currentCount);
});
op_add.on("click", function() {
  // Select the current count
  console.log(counter.text())
  firstCount = parseFloat(counter.text());
  //1 for addition
  currentOp = 1
  counter.text("0");
});

op_sub.on("click", function() {
  // Select the current count
  firstCount = parseFloat(counter.text());
  //2 for subtraction
  currentOp = 2
  counter.text("0");
});

op_mul.on("click", function() {
  // Select the current count
  firstCount = parseFloat(counter.text());
  //3 for mubtraction
  currentOp = 3
  counter.text("0");
});

op_div.on("click", function() {
  // Select the current count
  if (parseFloat(counter.text()) != 0) {
    firstCount = parseFloat(counter.text());
  }

  //4 for mubtraction
  currentOp = 4
  counter.text("0");
});

op_eq.on("click", function() {
  var currentCount = String(parseFloat(counter.text()));
  currentCount = currentCount.replace(/^0+/,'');

  if (currentOp==1) {
    currentCount = parseFloat(firstCount)+parseFloat(currentCount)
  }
  else if (currentOp == 2) {
    currentCount = parseFloat(firstCount)-parseFloat(currentCount)
  }
  else if (currentOp == 3) {
    currentCount = parseFloat(firstCount)*parseFloat(currentCount)
  }
  else if (currentOp == 4) {
    currentCount = parseFloat(firstCount)/parseFloat(currentCount)
  }

  counter.text(currentCount);
});


