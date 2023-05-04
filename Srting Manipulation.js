function manipulateString(str) {
    const newStr = str.toUpperCase();
    return function logString() {
      console.log(`The manipulated string is: ${newStr}`);
    };
  }

  



// function manipulateString(str) {
//     const manipulatedString = inputString.toUpperCase();

//     Callback(manipulatedString);
// }

// function logString(manipulatedString) {
//     console.log(' The manipulated string is: ${manipulatedString}');
// }

// //Expected Output

// manipulateString("hello, world!", logString);  // The manipulated string is: HELLO, WORLD!
