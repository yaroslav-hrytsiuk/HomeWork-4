//Task 4

console.log('\n');
console.log('Task 4');

// function sortArray(arr) {
//     for(let counter = arr.length; counter > 0; counter-- ) {
//         for (let i = 1; i < arr.length; i++) {
//             if (arr[i] < arr[i - 1]) {
//                 let tmp = arr[i];
//                 arr[i] = arr[i - 1];
//                 arr[i - 1] = tmp;
//                 i = 0;
//             }
//         }
//     }
//     return arr;
// }
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

// function insertionSort(arr) {
//     let counter = true;
//     while (counter) {
//         counter = false;
//         for (let i = arr.length; i > 0; i--) {
//             if (arr[i] < arr[i-1]) {
//                 let tmp = arr[i];
//                 arr[i] = arr[i - 1];
//                 arr[i - 1] = tmp;
//                 counter = true;
//             }
//         }
//     }
//     return arr;
// }
// const arrayTwo = [25, 1, 99, 36, 41, 9, 15, 3, 56, 55];
// console.log(arrayTwo);
// console.log(insertionSort(arrayTwo));

