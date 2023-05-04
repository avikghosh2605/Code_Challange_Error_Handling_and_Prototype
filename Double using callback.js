function doubleArray(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}





// function doubleArray(arr, callback) {
//     const doubleArr = arr.map((num) => {
//         return callback(num);
//     });
//     return doubleArr;
// }

// const originalArray = [1, 2, 3, 4];

// function callback(num) {
//     return num * 2;
// }

// const doubleArray = doubleArray(originalArray, callback);

// console.log(doubleArray); //output: [2, 4 ,6, 8]