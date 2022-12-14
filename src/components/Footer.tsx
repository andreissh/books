import React from "react";

import Chat from "./common/Chat";
import Envelope from "./common/Envelope";
import Phone from "./common/Phone";
import { IconsType } from "./types";

const Footer = () => {
  const icons: IconsType = {
    phone: <Phone />,
    chat: <Chat />,
    envelope: <Envelope />,
  };

  return (
    <div className="bg-zinc-800">
      <ul className="flex justify-center gap-6 pt-12 pb-8">
        {Object.keys(icons).map((icon) => {
          return <li key={icon}>{icons[icon]}</li>;
        })}
      </ul>
      <div className="flex justify-center p-4">
        <span className="inline-flex justify-center text-sm text-white">&copy; 2022 Copyright</span>
      </div>
    </div>
  );
};

export default Footer;
