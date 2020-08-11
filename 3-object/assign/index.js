export default function addSerialNumber(source) {
  // TODO 5: 在这里写实现代码，需要采用ES6 Object.assign
  const moreSource = {
    serialNumber: '12345',
    properties: {
      color: 'green', // 因为properties是一个整体，assign方法会把后面的properties直接覆盖
      status: 'processed'
    }
  };

  return Object.assign(source, moreSource);
}
