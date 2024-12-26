import React from 'react';
import {observer} from '@quarkunlimit/qu-mobx';
import {useStore} from '../store/RootStore';
import {ImageBackground, Pressable, View} from 'react-native';
import {QText} from '../../../components/QText';
import {BaseClickRow} from '../components/BaseClickRow';
import {BaseTextRow} from '../components/BaseTextRow';
import {globalColor} from '../../../globalStyle';
import {EContentItem} from '../../../interface';

export const BlockBox = observer(function BlockBox_() {
  const root = useStore();
  const {logic, global} = root;

  return logic.data?.detail.map(b => {
    return (
      <View key={b.title} style={{marginTop: 16}}>
        <QText
          style={{
            fontWeight: 'bold',
            fontSize: 18,
            borderBottomWidth: 2,
            borderBottomColor: globalColor.click,
            paddingBottom: 4,
          }}>
          {b.title}
        </QText>
        <View>
          {b.content.map((r, rIndex) => {
            return (
              <View
                key={`${b.title}_row_${rIndex}`}
                style={{marginTop: 4, flexDirection: 'row', flexWrap: 'wrap'}}>
                {r.map((i, index) => {
                  const key = `${rIndex}_${index}`;
                  switch (i.type) {
                    case EContentItem.br: {
                      return (
                        <QText
                          key={key}
                          style={{width: '100%', height: 2}}></QText>
                      );
                    }
                    case EContentItem.a: {
                      return (
                        <Pressable
                          onPress={() => {
                            if (i.content.length === 1) {
                              global.logic.showWordDetail(i.content);
                            }
                          }}>
                          <QText key={key} style={{color: globalColor.click}}>
                            {i.content}
                          </QText>
                        </Pressable>
                      );
                    }
                  }

                  return <QText key={key}>{i.content}</QText>;
                })}
              </View>
            );
          })}
        </View>
      </View>
    );
  });
});
