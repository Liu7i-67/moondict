import React from 'react';
import {observer, useWhen, when} from '@quarkunlimit/qu-mobx';
import type {IHomeProps} from './interface';
import {Provider, useStore} from './store/RootStore';
import {FlatList, View} from 'react-native';
import {Empty} from './modules/Empty';
import {WordItem} from './modules/WordItem';
import {ScrollToTop} from './modules/ScrollToTop';
import {Filter} from './modules/Filter';

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
        ListHeaderComponent={<View style={{height: 40}}></View>}
        initialNumToRender={15}
        onEndReached={logic.showMore}
        onEndReachedThreshold={0.4}
        ListEmptyComponent={<Empty />}
        data={computed.dataSource}
        renderItem={({item}) => <WordItem item={item} />}
        keyExtractor={item => item.no.toString()}></FlatList>
      <ScrollToTop />
      <Filter />
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
