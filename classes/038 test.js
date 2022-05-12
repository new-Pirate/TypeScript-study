"use strict";
class Userr {
    addSkill(skillOrSkills) {
        if (typeof skillOrSkills === 'string') {
            this.skills.push(skillOrSkills);
        }
        else {
            this.skills.concat(skillOrSkills);
        }
    }
}
const userr = new Userr().addSkill('sad');
const userr2 = new Userr().addSkill(['sad']);
