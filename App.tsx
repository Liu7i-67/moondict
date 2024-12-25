/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {lazy, Suspense} from 'react';
import {BackHandler, StyleProp, View, ViewStyle} from 'react-native';
import {globalColor} from './src/globalStyle';
import {observer, useWhen} from '@quarkunlimit/qu-mobx';
import {Provider, useStore} from './src/globalStore/index';
import {LoadingModal} from './src/layout/LoadingModal';
import {EPage} from './src/interface';
import {QText} from './src/components/QText';

const Home = lazy(() => import('./src/pages/Home'));
const Pinyin = lazy(() => import('./src/pages/Pinyin'));

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
      logic.init();
      BackHandler.addEventListener(
        'hardwareBackPress',
        logic.hardwareBackPress,
      );
    },
  );

  return (
    <View style={backgroundStyle}>
      <LoadingModal />
      <Suspense fallback={<QText>loading...</QText>}>
        {logic.renderPage?.has(EPage.Home) && <Home />}
        {logic.renderPage?.has(EPage.Pinyin) && <Pinyin />}
      </Suspense>
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
