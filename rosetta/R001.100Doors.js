function getFinalOpenedDoors(numDoors) {

    let array = [];
    let res = [];
    for (let i = 0; i < 100; i++) {
        array.push(false);
    }

    for (let j = 1; j <= numDoors; j++) {
        for (let i = 0; i < 100; i++) {
            if (i / j === 0) array[i] = !array[i];
        }
    }

    for (let i = 0; i < 100; i++) {
        if (array[i]) { res.push(i) };
    }
    return res;

    // let doors = [];
    // let i = 1, ii = i * i;

    // while (ii <= numDoors) {
    //     doors.push(ii);
    //     i++; ii = i * i;
    // }

    // return doors;
}

console.log(getFinalOpenedDoors(10));