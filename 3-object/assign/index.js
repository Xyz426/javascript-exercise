export default function addSerialNumber(source) {
  // TODO 5: 在这里写实现代码，需要采用ES6 Object.assign
  const moreSource = {
    serialNumber: '12345',
    properties: {
      color: 'green', // 为什么必须加上这个？
      status: 'processed'
    }
  };

  return Object.assign(source, moreSource);
}
