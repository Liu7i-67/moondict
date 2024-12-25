import React from 'react';
import {observer} from '@quarkunlimit/qu-mobx';
import {useStore} from '../store/RootStore';
import {ImageBackground, Pressable, View} from 'react-native';
import {QText} from '../../../components/QText';
import Clipboard from '@react-native-clipboard/clipboard';
import {IWord} from '../../../interface';
import {globalColor} from '../../../globalStyle';
import {message} from '../../../utils/tools';

export const WordItem = observer(function WordItem_(props: {item: IWord}) {
  const root = useStore();
  const {global} = root;
  const {item} = props;

  if (global.logic.filter.compact) {
    return (
      <ImageBackground
        source={require('../../../assets/imgs/mi.png')}
        style={{
          width: 30,
          height: 30,
          alignItems: 'center',
          justifyContent: 'center',
          paddingRight: 4,
          marginBottom: 4,
          marginRight: 4,
        }}>
        <QText style={{fontSize: 16}}> {item.word}</QText>
      </ImageBackground>
    );
  }

  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderColor: globalColor.border,
        borderRadius: 4,
        padding: 8,
        marginBottom: 8,
        position: 'relative',
      }}>
      <View style={{display: 'flex', flexDirection: 'row', marginBottom: 4}}>
        <ImageBackground
          source={require('../../../assets/imgs/mi.png')}
          style={{
            width: 30,
            height: 30,
            alignItems: 'center',
            justifyContent: 'center',
            paddingRight: 4,
          }}>
          <QText style={{fontSize: 16}}> {item.word}</QText>
        </ImageBackground>
        <QText style={{width: 40, marginLeft: 16}}> {item.affix}</QText>
        <QText style={{width: 90, marginLeft: 16}}>笔画 {item.strokes}</QText>
        <Pressable
          onPress={() => {
            Clipboard.setString(item.word);
            message('已复制到剪切板');
          }}>
          <QText style={{color: globalColor.click}}>复制</QText>
        </Pressable>
      </View>
    </View>
  );
});
