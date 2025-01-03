import React from 'react';
import {observer, useWhen} from '@quarkunlimit/qu-mobx';
import {Provider, useStore} from './store/RootStore';
import {Pressable, ScrollView, View} from 'react-native';
import {QText} from '../../components/QText';
import {EPage} from '../../interface';
import {globalColor} from '../../globalStyle';
import {QIcon} from '../../components/QIcon';
import {QTopBar} from '../../components/QTopBar';

interface IPinyinProps {}

const Pinyin = observer(function Pinyin_(props: IPinyinProps) {
  const root = useStore();
  const {global, logic} = root;

  useWhen(
    () => true,
    () => {
      logic.init();
    },
  );

  return (
    <View
      style={{
        flex: 1,
        display: global.logic.currentPage === EPage.Pinyin ? 'flex' : 'none',
      }}>
      <QTopBar title="按拼音查" />
      <ScrollView
        style={{
          flex: 1,
        }}>
        {logic.typeData.map(t => {
          return (
            <View key={t.type}>
              <View style={{backgroundColor: globalColor.bg2, padding: 16}}>
                <QText style={{fontSize: 20}}>{t.type}</QText>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  padding: 16,
                  flexWrap: 'wrap',
                }}>
                {t.option.map(p => {
                  return (
                    <Pressable
                      key={p}
                      style={{
                        width: '20%',
                        paddingVertical: 8,
                        marginVertical: 4,
                        backgroundColor:
                          global.logic.filter.type === p
                            ? globalColor.click
                            : 'transparent',
                      }}
                      onPress={() => {
                        global.logic.selectFilterType(p);
                        global.logic.backHome();
                      }}>
                      <QText
                        style={{
                          width: '100%',
                          textAlign: 'center',
                          color:
                            global.logic.filter.type === p
                              ? globalColor.background
                              : globalColor.text,
                        }}>
                        {p}
                      </QText>
                    </Pressable>
                  );
                })}
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
});

export default observer(function PinyinPage(props: IPinyinProps) {
  return (
    <Provider>
      <Pinyin {...props} />
    </Provider>
  );
});
