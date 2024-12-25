import React from 'react';
import {observer} from '@quarkunlimit/qu-mobx';
import {useStore} from '../store/RootStore';
import {View} from 'react-native';
import {QText} from '../../../components/QText';
import {globalColor} from '../../../globalStyle';

export const Filter = observer(function Filter_() {
  const root = useStore();
  const {logic} = root;

  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        height: 40,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: globalColor.background,
        borderBottomWidth: 1,
        borderColor: globalColor.border,
      }}>
      <QText>按拼音查</QText>
    </View>
  );
});
