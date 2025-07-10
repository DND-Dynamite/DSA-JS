** start of script.js **

function checkSet() {
  var set = new Set([1, 2, 3, 3, 2, 1, 2, 3, 1]);
  // Only change code below this line
  set.add("Taco").add("Cat").add("Awesome");
  // Only change code above this line
  console.log(Array.from(set));
  return set;
}

checkSet();

** end of script.js **

