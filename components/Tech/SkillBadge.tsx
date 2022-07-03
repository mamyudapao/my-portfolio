import React from "react";
import Styles from "./Tech.module.scss";

type Props = {
  name: string;
  group: "front" | "back" | "other";
};

const SkillBadge = (props: Props) => {
  return (
    <div className={`${Styles.skillBadge}`}>
      <span className={`${Styles.badgeTitle}`}>{props.name}</span>
    </div>
  );
};

export default SkillBadge;
