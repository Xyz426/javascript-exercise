// TODO 11: 在这里写实现代码
import Person from './person';
class Student extends Person {
  constructor(name, age, cclass) {
    super(name, age);
    this.cclass = cclass;
  }
  introduce() {
    return ` I am a Student. I am at Class ${this.cclass}.`;
  }
}

export default Student;
