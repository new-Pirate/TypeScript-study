class Userr {
  skills: string[];

  addSkill(skill: string): void;
  addSkill(skills: string[]): void;
  addSkill(skillOrSkills: string | string[]): void {
    if (typeof skillOrSkills === 'string') {
      this.skills.push(skillOrSkills);
    } else {
      this.skills.concat(skillOrSkills);
    }
  }
}

const userr = new Userr().addSkill('sad');
const userr2 = new Userr().addSkill(['sad']);
