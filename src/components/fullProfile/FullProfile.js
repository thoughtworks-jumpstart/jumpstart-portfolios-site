import React from "react";
import profileIcon from "../../images/man.svg";
import ProfileIcon from "../profileIcon/ProfileIcon";

const FullProfile = props => {
  return (
    <div>
      <ProfileIcon image={profileIcon} />
      <h1>{props.profile.name}</h1>

      <p>{props.profile.description}</p>
      <p>{props.profile.tagline}</p>

      <h2>Competencies</h2>
      {props.profile.skills.map((skill, i) => <p key={i}>{skill}</p>)}
    </div>
  );
};

export default FullProfile;
