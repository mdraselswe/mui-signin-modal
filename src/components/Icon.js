import React from 'react';
import { IconsMap } from './icons';
const Icon = ({ name, width = 20, height = 20 }) => {
  const SingleIcon = IconsMap[name];
  return <SingleIcon width={width} height={height} />;
};

export default Icon;
