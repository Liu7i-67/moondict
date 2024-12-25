import React from 'react';
import {observer} from '@quarkunlimit/qu-mobx';
import {useStore} from '../globalStore';
import {View} from 'react-native';
import {QIcon} from './QIcon';
import {QText} from './QText';
import {globalColor} from '../globalStyle';

export const QTopBar = observer(function QTopBar_(props: {title: string}) {
  const root = useStore();
  const {logic} = root;

  return (
    <View
      style={{
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: globalColor.click,
      }}>
      <QIcon
        style={{
          paddingLeft: 16,
          height: 60,
          width: 40,
          justifyContent: 'center',
        }}
        icon="back_light"
        onPress={logic.backHome}
      />
      <QText
        style={{
          color: globalColor.background,
          fontSize: 18,
          textAlign: 'center',
          flex: 1,
        }}>
        {props.title}
      </QText>
      <View style={{width: 40}} />
    </View>
  );
});
