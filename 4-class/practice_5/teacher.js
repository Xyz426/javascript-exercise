// TODO 20: 在这里写实现代码
import Person from './person';
class Teacher extends Person {
  constructor(name, age, cclass) {
    super(name, age);
    this.cclass = cclass;
  }
  introduce() {
    if (this.cclass == null) {
      return `${super.basic_introduce()} I am a Teacher. I teach No Class.`;
    }
    return `${super.basic_introduce()} I am a Teacher. I teach Class ${this.cclass}.`;
  }
}

export default Teacher;
