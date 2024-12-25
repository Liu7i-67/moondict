/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {BackHandler, StyleProp, View, ViewStyle} from 'react-native';
import Home from './src/pages/Home';
import Pinyin from './src/pages/Pinyin';
import {globalColor} from './src/globalStyle';
import {observer, useWhen} from '@quarkunlimit/qu-mobx';
import {Provider, useStore} from './src/globalStore/index';
import {LoadingModal} from './src/layout/LoadingModal';
import {EPage} from './src/interface';

const backgroundStyle: StyleProp<ViewStyle> = {
  backgroundColor: globalColor.background,
  flex: 1,
};

const App = observer(function App_(): React.JSX.Element {
  const global = useStore();
  const {logic} = global;

  useWhen(
    () => true,
    () => {
      BackHandler.addEventListener(
        'hardwareBackPress',
        logic.hardwareBackPress,
      );
    },
  );

  return (
    <View style={backgroundStyle}>
      <LoadingModal />
      {logic.currentPage === EPage.Home && <Home />}
      {logic.currentPage === EPage.Pinyin && <Pinyin />}
    </View>
  );
});

export default observer(function Root() {
  return (
    <Provider>
      <App />
    </Provider>
  );
});
