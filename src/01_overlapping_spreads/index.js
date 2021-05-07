// Given an array of integers, replace every element with its neighbouring numbers (integers next to it),
// then find the duplicate numbers and sum them up. It is guaranteed that provided integers are unique,
// which means they will not repeat.
//
// For example for the input: -3,5,8,-1,6,11
// * given that neighbouring numbers for -3 are -4 and -2
// * resulting array after replacement with neighbouring numbers would be: -4,-2,4,6,7,9,-2,0,5,7,10,12
// * duplicate numbers are -2,7
// * the result will be 5.

exports.overlappingSpreads = function (data) {
  //TODO implement me
  const newData = [...data];
  const neighboursArray = [];
  newData.map((item) => {
    neighboursArray.push(item - 1, item + 1);
  });

  const duplicates = [];
  const tempArray = [...neighboursArray].sort();
  for (let i = 0; i < tempArray.length; i++) {
    if (tempArray[i + 1] === tempArray[i]) {
      duplicates.push(tempArray[i]);
    }
  }
  const duplicatesSum = duplicates.reduce((a, b) => a + b, 0);
  return duplicatesSum;
};
