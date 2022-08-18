import avatarPicture from "../assets/img/avatar.jpg";
import deerAvatar from "../assets/img/deer-avatar.png";
import iconAvatar from "../assets/img/icon-avatar.png";
import robinAvatar from "../assets/img/robin-avatar.png";
import magoAvatar from "../assets/img/mago-avatar.png";
import titleAvatar from "../assets/img/title-avatar.png";
import gumballAvatar from "../assets/img/gumball-avatar.png";

import { useState, useEffect } from "react";
const Avatar = () => {
  const avatars = [
    avatarPicture,
    deerAvatar,
    iconAvatar,
    robinAvatar,
    magoAvatar,
    titleAvatar,
    gumballAvatar,
  ];
  const [avatar, setAvatar] = useState(avatars[0]);

  useEffect(() => {
    let index = -1;

    setInterval(() => {
      setAvatar(avatars[index + 1]);
      index++;
      console.log(index);
      if (index === 6) {
        index = -1;
      }
    }, 3000);
  }, []);
  return (
    <div className="avatar">
      <img src={avatar} />
    </div>
  );
};

export default Avatar;
