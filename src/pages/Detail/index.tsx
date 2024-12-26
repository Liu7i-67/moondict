import React, {useEffect} from 'react';
import {observer} from '@quarkunlimit/qu-mobx';
import {Provider, useStore} from './store/RootStore';
import {ScrollView, View} from 'react-native';
import {EPage} from '../../interface';
import {QText} from '../../components/QText';
import {QTopBar} from '../../components/QTopBar';
import RNFS from 'react-native-fs';
import {BaseInfo} from './modules/BaseInfo';
import {SubBaseInfo} from './modules/SubBaseInfo';

interface IDetailProps {}

const Detail = observer(function Detail_(props: IDetailProps) {
  const root = useStore();
  const {global, logic} = root;

  useEffect(() => {
    logic.init();
  }, [global.logic.currentWord]);

  return (
    <View
      style={{
        flex: 1,
        display: global.logic.currentPage === EPage.Detail ? 'flex' : 'none',
      }}>
      <QTopBar title={`${global.logic.currentWord} - 详情`} />
      <ScrollView
        style={{
          flex: 1,
          padding: 16,
        }}>
        <BaseInfo />
        <SubBaseInfo />
      </ScrollView>
    </View>
  );
});

export default observer(function DetailPage(props: IDetailProps) {
  return (
    <Provider>
      <Detail {...props} />
    </Provider>
  );
});
