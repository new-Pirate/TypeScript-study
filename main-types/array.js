"use strict";
const skills = ['front', 'back', 'test'];
for (const skill of skills) {
    console.log(skill.toLocaleLowerCase());
}
const resArr = skills.filter((s) => s !== 'front').map(s => s + '!').reduce((a, b) => a + b);
console.log(resArr);
