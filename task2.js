//Task 2 

console.log('\n');
console.log('Task 2');

function argLength(arr) {
    if (arguments.length === 0) {
        return 'Error! Please write an arguments!'
    } else if (arguments.length >= 10) {
        let array = [];
        for (let i = 0; i < arguments.length; i++) {
            array.push(arguments[i]);
        }
        return ('Array of arguments - ' + array);
    } else {
        let argSum = 0;
        for (let i = 0; i < arguments.length; i++) {
            argSum += arguments[i];
        }
        return ('Sum of arguments - ' + argSum);
    }
}
console.log(argLength(1, 2));