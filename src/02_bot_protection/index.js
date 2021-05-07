// One gaming company found out that they are losing money because some players are using scripts that are playing the
// game for players while they are sleeping.
//
// From the access logs on their servers, developers can see which commands each player is sending. Analysing them, they
// discovered those scripts are using the same sequence of commands all the time.
//
// Your task is to use cleaned up access logs to discover bots. Cleaned up access log of one player would look like an
// space separated sequence of commands sent by the player. Detect if 3 sequential commands are repeated at least
// 2 times from the cleaned up access log.
//
// For example, we have following access log:
//
// left right fire jump fire back forward forward jump fire back left left right
//
// we can see that the sequence "jump fire back" is repeated two times.

const compareArrays = (arr1, arr2) => {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
};

const advacedArrayComparator = (
  arr1,
  arr2,
  initialIndex = 0,
  compareIndex = 1
) => {
  const threeItemArray = arr1.slice(initialIndex, initialIndex + 3);
  const comparedArray = arr2.slice(compareIndex, compareIndex + 3);
  const equalArrays = compareArrays(threeItemArray, comparedArray);
  if (equalArrays) {
    return threeItemArray;
  } else if (compareIndex <= arr1.length) {
    advacedArrayComparator(arr1, arr2, initialIndex, compareIndex + 1);
  } else {
    return false;
  }
};

function foundPattern(arr, index = 0) {
  const newArray = [...arr];
  const newArray2 = [...arr];
  const checkPattern = advacedArrayComparator(
    newArray,
    newArray2,
    index,
    index + 1
  );
  if (checkPattern) {
    return true;
  } else if (!checkPattern && index <= arr.length) {
    return foundPattern(arr, index + 1);
  } else {
    return false;
  }
}

exports.botProtection = function (data) {
  //TODO implement me
  return foundPattern(data);
};
