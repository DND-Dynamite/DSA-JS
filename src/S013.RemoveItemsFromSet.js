** start of script.js **

function checkSet(arrToBeSet, checkValue){

   // Only change code below this line
   var set = new Set(arrToBeSet);
   var flag = set.has(checkValue);
   return [flag, set.size];
   // Only change code above this line

}

** end of script.js **

