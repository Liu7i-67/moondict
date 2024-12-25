import React, {useEffect} from 'react';
import {observer, useWhen} from '@quarkunlimit/qu-mobx';
import type {IHomeProps} from './interface';
import {Provider, useStore} from './store/RootStore';
import {FlatList, View} from 'react-native';
import {Empty} from './modules/Empty';
import {WordItem} from './modules/WordItem';
import {ScrollToTop} from './modules/ScrollToTop';
import {Filter} from './modules/Filter';
import {EPage} from '../../interface';
import {Footer} from './modules/Footer';

const Home = observer(function Home_(props: IHomeProps) {
  const root = useStore();
  const {computed, logic, refs, global} = root;

  useWhen(
    () => global.logic.wordSize.numColumns !== 0,
    () => {
      logic.init();
    },
  );

  useEffect(() => {
    logic.resetList();
  }, [global.logic.filter.type, global.logic.filter.compact]);

  const getDom = (m: boolean, numColumns: number) => {
    return (
      <FlatList
        ref={refs.listRef}
        style={{padding: 8}}
        numColumns={m ? numColumns : 1}
        key={m ? numColumns : 1}
        ListHeaderComponent={<View style={{height: 40}}></View>}
        ListFooterComponent={<Footer />}
        initialNumToRender={m ? global.logic.wordSize.initialNumToRender : 20}
        onEndReached={logic.showMore}
        onEndReachedThreshold={0.4}
        ListEmptyComponent={<Empty />}
        data={computed.dataSource}
        renderItem={({item}) => <WordItem item={item} />}
        keyExtractor={item => item.no.toString()}></FlatList>
    );
  };

  return (
    <View
      style={{
        position: 'relative',
        flex: 1,
        display: global.logic.currentPage === EPage.Home ? 'flex' : 'none',
      }}>
      {getDom(global.logic.filter.compact, global.logic.wordSize.numColumns)}
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
