const getRandomIndex = (arr: string[]) => {
  const min = 0;
  const max = arr.length - 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default getRandomIndex;
// This function generates a random index for a given array 