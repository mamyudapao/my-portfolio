import Styles from "./Tech.module.scss";
import React, { useState } from "react";
import SkillBadgeGroup from "./SkillBadgeGroup";

type Skill = {
  name: string;
  group: "front" | "back" | "other";
};

const Tech = () => {
  const [skills, setSkills] = useState<Skill[]>([
    { name: "Next.js", group: "front" },
    { name: "React", group: "front" },
    { name: "Vue.js", group: "front" },
    { name: "Sass", group: "front" },
    { name: "Nuxt.js", group: "front" },
    { name: "Python", group: "front" },
    { name: "TypeScript", group: "front" },
    { name: "Go", group: "front" },
    { name: "Express", group: "front" },
    { name: "Ruby", group: "front" },
    { name: "AWS", group: "front" },
    { name: "GCP", group: "front" },
    { name: "Linux", group: "front" },
  ]);
  return (
    <div id="tech">
      <h1 className={Styles.title}>Tech</h1>
      <div className={Styles.techWrapper}>
        <div className={Styles.left}>
          <h2>It is my skills!</h2>
          <p>
            これまで幅広い技術を経験してきました。
            <br />
            システム開発はお任せください。
          </p>
        </div>
        <div className={Styles.right}>
          <SkillBadgeGroup skills={skills} />
        </div>
      </div>
    </div>
  );
};

export default Tech;
