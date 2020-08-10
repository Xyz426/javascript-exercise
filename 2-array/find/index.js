export default function find00OldPerson(collection) {
  // TODO 4: 在这里写实现代码
  let max = new Date().getFullYear() - 2000;
  let min = new Date().getFullYear() - 2010;

  //find返回元素，filter返回数组
  return collection.find(person => person.age <= max && person.age >= min).name;
}
