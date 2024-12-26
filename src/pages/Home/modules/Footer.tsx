import React from 'react';
import {observer} from '@quarkunlimit/qu-mobx';
import {useStore} from '../store/RootStore';
import {View} from 'react-native';
import {QText} from '../../../components/QText';

export const Footer = observer(function Footer_() {
  const root = useStore();
  const {computed} = root;

  if (!computed.showList.length) {
    return null;
  }

  return (
    <View style={{paddingBottom: 32}}>
      <QText style={{textAlign: 'center'}}>
        {computed.haveMore ? '数据加载中...' : '到底了宝贝儿~'}
      </QText>
    </View>
  );
});
