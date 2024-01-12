const numberCallList = (nums) => {
  return Array.from({ length: nums }, () => Math.floor(Math.random() * 99) + 1);
};

const numberCall = () => {
  return Math.floor(Math.random() * 99) + 1;
};

// const resultArray = numberCall(15);
// console.log(resultArray);

module.exports = { numberCall, numberCallList };
