import React from 'react';
import {observer} from '@quarkunlimit/qu-mobx';
import {Provider, useStore} from './store/RootStore';
import {View} from 'react-native';
import {QText} from '../../components/QText';
import {EPage} from '../../interface';

interface IPinyinProps {}

const Pinyin = observer(function Pinyin_(props: IPinyinProps) {
  const root = useStore();
  const {global} = root;

  return (
    <View
      style={{
        display: global.logic.currentPage === EPage.Pinyin ? 'flex' : 'none',
      }}>
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
