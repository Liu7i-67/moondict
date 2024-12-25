import React from 'react';
import {observer} from '@quarkunlimit/qu-mobx';
import {useStore} from '../store/RootStore';
import {View} from 'react-native';
import {QText} from '../../../components/QText';

export const Footer = observer(function Footer_() {
  const root = useStore();
  const {computed} = root;

  return (
    <View style={{paddingBottom: 32}}>
      <QText style={{textAlign: 'center'}}>
        {computed.haveMore ? '数据加载中...' : '到底了小嘎~'}
      </QText>
    </View>
  );
});
