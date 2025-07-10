function fiboEvenSum(n) {

   let t1 = 0, t2 = 1, nextTerm = t1 + t2, series = [], fibEvenArray = [];

  while(nextTerm<n) {
        t1 = t2;
        t2  = nextTerm;
        nextTerm = t1 + t2;
        series.push(nextTerm);
        if(nextTerm % 2 === 0) fibEvenArray.push(nextTerm);
   }

   console.log(series);
    console.log(fibEvenArray);

    return fibEvenArray.reduce((a,b) => (a + b), 0);
}

console.log(fiboEvenSum(10));