//Task 4

console.log('\n');
console.log('Task 4');

function bubbleSort(arr) {
    let counter = true;
    while (counter) {
        counter = false;
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < arr[i-1]) {
                let tmp = arr[i];
                arr[i] = arr[i - 1];
                arr[i - 1] = tmp;
                counter = true;
            }
        }
    }
    return arr;
}

const array = [25, 1, 99, 36, 41, 9, 15, 3, 56, 55];
console.log(array);
console.log(bubbleSort(array));
console.log('\n');

function insertionSort(arr) {
    for (let counter = 0; counter < arr.length; counter++) {
        let i = counter - 1;
        let el = arr[counter];
        while(i >= 0 && arr[i] > el) {
            arr[i+1] = arr[i];
            i--;
        }
        arr[i+1] = el;
    }
    return arr;
}
const arrayTwo = [25, 1, 99, 36, 41, 9, 15, 3, 56, 55];
console.log(arrayTwo);
console.log(insertionSort(arrayTwo));

