import React from 'react';
import {observer} from '@quarkunlimit/qu-mobx';
import {useStore} from '../globalStore';
import {ActivityIndicator, Modal, View} from 'react-native';
import {QText} from '../components/QText';
import {globalColor} from '../globalStyle';

export const LoadingModal = observer(function LoadingModal_() {
  const root = useStore();
  const {logic} = root;

  return (
    <Modal animationType="fade" visible={logic.loading} transparent={true}>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#00000080',
          height: '100%',
        }}>
        <ActivityIndicator size="large" color={globalColor.background} />
        <QText style={{color: globalColor.background}}>
          {logic.loadingText}
        </QText>
      </View>
    </Modal>
  );
});
