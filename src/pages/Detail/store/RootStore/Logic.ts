import {makeAutoObservable, runInAction} from '@quarkunlimit/qu-mobx';
import {ILogic, TLoadingStore} from './interface';
import {RootStore} from './';
import RNFS from 'react-native-fs';
import {message} from '../../../../utils/tools';
import {IWordDetail} from '../../../../interface';

export class Logic implements ILogic {
  loadingStore: TLoadingStore;
  rootStore: RootStore;
  data: IWordDetail | null = null;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    this.loadingStore = rootStore.loadingStore;
    makeAutoObservable(this, {}, {autoBind: true});
  }

  async init() {
    const {global} = this.rootStore;
    const {logic} = global;
    if (!logic.currentWord) {
      return;
    }

    const filePath = `word/${logic.currentWord.charCodeAt(0)}.json`;
    try {
      logic.showLoading('数据加载中...');
      const fileContent = await RNFS.readFileAssets(filePath);
      runInAction(() => {
        this.data = JSON.parse(fileContent);
        logic.hiddenLoading();
      });
    } catch (error) {
      runInAction(() => {
        logic.hiddenLoading();
        message('详情获取失败了');
      });
      return null;
    }
  }
}
