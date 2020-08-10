function getScore(id) {
  if (id === '1234') {
    return 60;
  }
  return 59;
}

export default function getScoreOutput(person) {
  // TODO 8: 在这里写实现代码

  //下面的为啥不行？
  return `你好，${person.lastName}${person.firstName}！你的考试成绩为${getScore(person.id)}分`;
}
