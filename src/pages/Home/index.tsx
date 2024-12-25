import React from 'react';
import {observer, useWhen, when} from '@quarkunlimit/qu-mobx';
import type {IHomeProps} from './interface';
import {Provider, useStore} from './store/RootStore';
import {FlatList, Pressable, ScrollView, View} from 'react-native';
import {QText} from '../../components/QText';
import {Empty} from './modules/Empty';
import {WordItem} from './modules/WordItem';
import {ScrollToTop} from './modules/ScrollToTop';

const Home = observer(function Home_(props: IHomeProps) {
  const root = useStore();
  const {computed, logic, refs} = root;

  useWhen(
    () => true,
    () => {
      logic.init();
    },
  );

  return (
    <View style={{position: 'relative', flex: 1}}>
      <FlatList
        ref={refs.listRef}
        style={{padding: 8}}
        ListHeaderComponent={<View style={{height: 30}}></View>}
        initialNumToRender={15}
        onEndReached={logic.showMore}
        onEndReachedThreshold={0.4}
        ListEmptyComponent={<Empty />}
        data={computed.dataSource}
        renderItem={({item}) => <WordItem item={item} />}
        keyExtractor={item => item.no.toString()}></FlatList>
      <ScrollToTop />
    </View>
  );
});

export default observer(function HomePage(props: IHomeProps) {
  return (
    <Provider>
      <Home {...props} />
    </Provider>
  );
});

export * from './interface';
