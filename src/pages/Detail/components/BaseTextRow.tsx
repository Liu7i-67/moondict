import React from 'react';
import {observer} from '@quarkunlimit/qu-mobx';
import {useStore} from '../store/RootStore';
import {View} from 'react-native';
import {QText} from '../../../components/QText';
import {globalColor} from '../../../globalStyle';

export const BaseTextRow = observer(function BaseTextRow_(props: {
  label: React.ReactNode;
  value?: string;
  full?: boolean;
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
      <QText>{props.label}：</QText>
      <QText>{props.value}</QText>
    </View>
  );
});
