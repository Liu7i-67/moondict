import React from 'react';
import {observer} from '@quarkunlimit/qu-mobx';
import {useStore} from '../store/RootStore';
import {View} from 'react-native';
import {QText} from '../../../components/QText';
import {IWord} from '../../../interface';

export const WordItem = observer(function WordItem_(props: {item: IWord}) {
  const root = useStore();
  const {logic} = root;
  const {item} = props;

  return (
    <View
      style={{
        borderWidth: 1,
        borderRadius: 4,
        padding: 8,
        marginBottom: 8,
        position: 'relative',
      }}>
      <View style={{display: 'flex', flexDirection: 'row', marginBottom: 4}}>
        <QText> {item.word}</QText>
        <QText> {item.affix}</QText>
      </View>
    </View>
  );
});
