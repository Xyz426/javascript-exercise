export default function collectCarNumberCount(collection) {
  // TODO 7: 在这里写实现代码
  return collection.filter(n => n.substr(0, 2) === '粤A').length;
}
