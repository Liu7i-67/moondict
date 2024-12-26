import React from 'react';
import {observer} from '@quarkunlimit/qu-mobx';
import {useStore} from '../store/RootStore';
import {Pressable, View} from 'react-native';
import {QText} from '../../../components/QText';
import {globalColor} from '../../../globalStyle';

export const BaseClickRow = observer(function BaseClickRow_(props: {
  label: React.ReactNode;
  value?: string;
}) {
  const root = useStore();
  const {global} = root;

  if (!props.value) {
    return null;
  }

  return (
    <View
      style={{
        flexDirection: 'row',
      }}>
      <QText style={{marginRight: 2}}>{props.label}:</QText>
      <Pressable
        onPress={() => {
          global.logic.showWordDetail(props.value);
        }}>
        <QText style={{color: globalColor.click}}>{props.value}</QText>
      </Pressable>
    </View>
  );
});
