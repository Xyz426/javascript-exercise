// TODO 14: 在这里写实现代码
import Person from './person';

class Worker extends Person {
  constructor(name, age) {
    super(name, age);
    this.state = {};
  }

  introduce() {
    return `I am a Worker. I have a job.`;
  }
}
export default Worker;
