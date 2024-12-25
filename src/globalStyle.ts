import {StyleSheet} from 'react-native';

export const globalColor = {
  text: '#333',
  background: '#fff',
};

export const gloablStyle = StyleSheet.create({
  colors: {
    color: 'red',
  },
  text: {
    color: globalColor.text,
  },
});
