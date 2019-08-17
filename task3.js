//Task 3

console.log('\n');
console.log('Task 3');

function factorial(arr) {

    if (arr === 1) {
        return 1;
    } else {
        return arr + factorial(arr - 1);
    }
}

console.log('Factorial - ' + factorial(5));