import React from 'react';
import {observer} from '@quarkunlimit/qu-mobx';
import {useStore} from '../store/RootStore';
import {TouchableOpacity} from 'react-native';
import {globalColor} from '../../../globalStyle';
import {QIcon} from '../../../components/QIcon';

export const ScrollToTop = observer(function ScrollToTop_() {
  const root = useStore();
  const {refs} = root;

  return (
    <QIcon
      icon="to_top"
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
      }></QIcon>
  );
});
