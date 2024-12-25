export const icons = {
  back: require('../../assets/icons/back.png'),
  back_light: require('../../assets/icons/back_light.png'),
  to_top: require('../../assets/icons/to_top.png'),
} as const;

export type TIcon = keyof typeof icons;
