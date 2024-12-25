import React from 'react';
import {Image, Pressable, PressableProps} from 'react-native';
import {TIcon, icons} from './icons';

export interface IQIconProps extends PressableProps {
  icon?: TIcon;
}

export const QIcon = function QIcon_(props: IQIconProps) {
  const {icon = 'back', ...rest} = props;

  return (
    <Pressable {...rest}>
      <Image source={icons[icon]} style={{width: 20, height: 20}} />
    </Pressable>
  );
};
