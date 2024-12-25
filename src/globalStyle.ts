import {StyleSheet} from 'react-native';

export const globalColor = {
  /** @param 文本颜色 */
  text: '#333',
  /** @param 背景颜色 */
  background: '#fff',
  /** @param 深色背景 */
  bg2: '#dddddd',
  /** @param 链接颜色 */
  click: '#008042',
  /** @param 边框颜色 */
  border: '#eeeeee',
};

export const gloablStyle = StyleSheet.create({
  colors: {
    color: 'red',
  },
  text: {
    color: globalColor.text,
  },
});
