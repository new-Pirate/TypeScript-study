const skills: string[] = ['front', 'back', 'test'];

for (const skill of skills) {
  console.log(skill.toLocaleLowerCase());
}

const resArr = skills.filter((s: string) => s !== 'front').map(s => s + '!').reduce((a, b) => a + b);

console.log(resArr);
