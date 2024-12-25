import React from 'react';
import {observer} from '@quarkunlimit/qu-mobx';
import {Provider, useStore} from './store/RootStore';
import {View} from 'react-native';
import {QText} from '../../components/QText';

interface IPinyinProps {}

const Pinyin = observer(function Pinyin_(props: IPinyinProps) {
  const root = useStore();

  return (
    <View>
      <QText>Pinyin</QText>
    </View>
  );
});

export default observer(function PinyinPage(props: IPinyinProps) {
  return (
    <Provider>
      <Pinyin {...props} />
    </Provider>
  );
});
