import React from 'react';
import {observer} from '@quarkunlimit/qu-mobx';
import {useStore} from '../store/RootStore';
import {TouchableOpacity} from 'react-native';
import {QText} from '../../../components/QText';
import {globalColor} from '../../../globalStyle';

export const ScrollToTop = observer(function ScrollToTop_() {
  const root = useStore();
  const {refs} = root;

  return (
    <TouchableOpacity
      style={{
        position: 'absolute',
        right: 20,
        bottom: 40,
        backgroundColor: globalColor.background,
        borderWidth: 1,
        padding: 8,
        borderRadius: 4,
      }}
      onPress={() =>
        refs.listRef.current?.scrollToOffset?.({
          offset: 0,
        })
      }>
      <QText>顶</QText>
    </TouchableOpacity>
  );
});
