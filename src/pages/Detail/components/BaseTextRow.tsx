import React from 'react';
import {observer} from '@quarkunlimit/qu-mobx';
import {useStore} from '../store/RootStore';
import {DimensionValue, View} from 'react-native';
import {QText} from '../../../components/QText';

export const BaseTextRow = observer(function BaseTextRow_(props: {
  label: React.ReactNode;
  value?: string;
  /** @param 宽度  */
  width?: DimensionValue;
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
        width: props.width,
      }}>
      <QText style={{marginRight: 2}}>{props.label}:</QText>
      <QText lineBreakMode="head" numberOfLines={2}>
        {props.value}
      </QText>
    </View>
  );
});
