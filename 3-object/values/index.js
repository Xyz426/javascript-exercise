export default function countTypesNumber(source) {
  // TODO 6: 在这里写实现代码
  let sum = 0;
  Object.keys(source).forEach(key => {
    sum += parseInt(source[key], 10);
  });
  return sum;
}
