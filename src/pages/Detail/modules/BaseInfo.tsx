import React from 'react';
import {observer} from '@quarkunlimit/qu-mobx';
import {useStore} from '../store/RootStore';
import {ImageBackground, View} from 'react-native';
import {QText} from '../../../components/QText';
import {BaseClickRow} from '../components/BaseClickRow';
import {BaseTextRow} from '../components/BaseTextRow';

export const BaseInfo = observer(function BaseInfo_() {
  const root = useStore();
  const {logic, global} = root;

  return (
    <View style={{flexDirection: 'row'}}>
      <ImageBackground
        source={require('../../../assets/imgs/mi.png')}
        style={{
          width: 120,
          height: 120,
          alignItems: 'center',
          justifyContent: 'center',
          paddingRight: 12,
        }}>
        <QText style={{fontSize: 64}}> {logic.data?.word}</QText>
      </ImageBackground>
      <View
        style={{
          flex: 1,
          paddingLeft: 16,
          justifyContent: 'space-between',
        }}>
        <BaseClickRow label="繁体" value={logic.data?.traditional} />
        <BaseClickRow label="简体" value={logic.data?.simplified} />
        <BaseTextRow label="拼音" value={logic.data?.pinyin.join('、')} />
        <BaseTextRow label="分类" value={logic.data?.type} />
        <BaseTextRow label="笔顺" value={logic.data?.stroke_order} />
      </View>
    </View>
  );
});
