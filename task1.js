//Task 1 

console.log('Task 1');

function sumNumbers(from, to) {
    let evenNumbersCount = 0,
        oddNumbersCount = 0;
    // for (let evenNumbers = from; evenNumbers < to; evenNumbers++) {
    //     if(evenNumbers % 2 === 0) {
    //         evenNumbersCount = evenNumbersCount + 1;
    //         evenNumbers++;
    //         return evenNumbersCount;
    //     }
    // }

    if (isNaN(from) || isNaN(to) || to < from || arguments.length !== 2) {
        console.log('Error!');
    } else {
        while (from <= to) {
            if (from % 2 === 0) {
                evenNumbersCount++;
            } else {
                oddNumbersCount++;
            }
            from++;
        }
        console.log('Numbers of even elements - ' + evenNumbersCount);
        console.log('Numbers of odd elements - ' + oddNumbersCount);
    }

}

sumNumbers(5, 11);