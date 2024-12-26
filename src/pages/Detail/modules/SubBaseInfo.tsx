import React from 'react';
import {observer} from '@quarkunlimit/qu-mobx';
import {useStore} from '../store/RootStore';
import {ImageBackground, View} from 'react-native';
import {BaseTextRow} from '../components/BaseTextRow';

export const SubBaseInfo = observer(function SubBaseInfo_() {
  const root = useStore();
  const {logic, global} = root;

  return (
    <View
      style={{flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 16}}>
      <BaseTextRow width="20%" label="部首" value={logic.data?.radical} />
      <BaseTextRow width="40%" label="部外笔画" value={logic.data?.stroke} />
      <BaseTextRow
        width="30%"
        label="总笔画"
        value={logic.data?.total_stroke}
      />
      <BaseTextRow width="20%" label="繁部" value={logic.data?.t_radical} />
      <BaseTextRow width="40%" label="部外笔画" value={logic.data?.t_stroke} />
      <BaseTextRow
        width="30%"
        label="总笔画"
        value={logic.data?.t_total_stroke}
      />
      <BaseTextRow
        label="仓颉"
        width="45%"
        value={logic.data?.input_method.bopomofo}
      />
      <BaseTextRow
        label="四角号码"
        width="45%"
        value={logic.data?.input_method.number}
      />
      <BaseTextRow
        label="Unicode"
        width="45%"
        value={logic.data?.input_method.unicode}
      />
      <BaseTextRow
        label="五笔"
        width="45%"
        value={logic.data?.input_method.wubi}
      />
    </View>
  );
});
