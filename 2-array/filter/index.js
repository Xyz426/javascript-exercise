function chooseMultiplesOfThree(collection) {
  // TODO 1: 在这里写实现代码
  return collection.filter(n => n % 3 === 0);
}

function chooseNoRepeatNumber(collection) {
  // TODO 2: 在这里写实现代码
  return collection.filter((n, index) => collection.indexOf(n) === index);
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
