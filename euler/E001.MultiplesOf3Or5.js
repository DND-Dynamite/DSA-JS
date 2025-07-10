function multiplesOf3Or5(number) {
    const res = [];
    let sum = 0;

    for(let i =0; i<number; i++) {
        if(i % 3 === 0 || i % 5 === 0){
            res.push(i);
        }
    }

    sum = res.reduce((a, b) => {return a + b}, 0);
    return sum;
}

multiplesOf3Or5(1000);