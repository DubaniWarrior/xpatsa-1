import React from "react";
import { Ranger } from "./socialMedia.stc";

const SocialMediaIcons = (props) => {
  const { icone } = props;
  return <RowIcons>{icone}</RowIcons>;
};

export default SocialMediaIcons;
