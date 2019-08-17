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
function sortArray(arr) {
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
console.log(sortArray(array));

