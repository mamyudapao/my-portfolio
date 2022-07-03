import React from "react";
import SkillBadge from "./SkillBadge";
import Styles from "./Tech.module.scss";

type Skill = {
  name: string;
  group: "front" | "back" | "other";
};

type Props = {
  skills: Skill[];
};

const TopSkillsBadgeGroup = (props: Props) => {
  return (
    <div className={Styles.skillBadgeGroup}>
      {props.skills.map((skill, index) => {
        return <SkillBadge name={skill.name} key={index} group={skill.group} />;
      })}
    </div>
  );
};
const CenterSkillsBadgeGroup = (props: Props) => {
  return (
    <div className={Styles.skillBadgeGroupCenter}>
      {props.skills.map((skill, index) => {
        return <SkillBadge name={skill.name} key={index} group={skill.group} />;
      })}
    </div>
  );
};
const BottomSkillsBadgeGroup = (props: Props) => {
  return (
    <div className={Styles.skillBadgeGroup}>
      {props.skills.map((skill, index) => {
        return <SkillBadge name={skill.name} key={index} group={skill.group} />;
      })}
    </div>
  );
};

const SkillBadgeGroup = (props: Props) => {
  const allocateSkills = (skills: Skill[]) => {
    const topSkills: Skill[] = [];
    const centerSkills: Skill[] = [];
    const bottomSkills: Skill[] = [];
    skills.forEach((skill, index) => {
      if (index % 3 === 0) {
        topSkills.push(skill);
      } else if (index % 3 === 1) {
        centerSkills.push(skill);
      } else if (index % 3 === 2) {
        bottomSkills.push(skill);
      }
    });
    return {
      topSkills,
      centerSkills,
      bottomSkills,
    };
  };
  const { topSkills, centerSkills, bottomSkills } = allocateSkills(
    props.skills
  );
  return (
    <div>
      <TopSkillsBadgeGroup skills={topSkills} />
      <CenterSkillsBadgeGroup skills={centerSkills} />
      <BottomSkillsBadgeGroup skills={bottomSkills} />
    </div>
  );
};

export default SkillBadgeGroup;
