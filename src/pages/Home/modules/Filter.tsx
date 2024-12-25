import React from 'react';
import {observer} from '@quarkunlimit/qu-mobx';
import {useStore} from '../store/RootStore';
import {Pressable, View} from 'react-native';
import {QText} from '../../../components/QText';
import {globalColor} from '../../../globalStyle';
import {EPage} from '../../../interface';

export const Filter = observer(function Filter_() {
  const root = useStore();
  const {global} = root;

  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        height: 40,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: globalColor.background,
        borderBottomWidth: 1,
        borderColor: globalColor.border,
        paddingHorizontal: 16,
      }}>
      <Pressable onPress={() => global.logic.changePage(EPage.Pinyin)}>
        <QText style={{color: globalColor.click}}>
          按拼音查{global.logic.filter.type && `(${global.logic.filter.type})`}
        </QText>
      </Pressable>
    </View>
  );
});
