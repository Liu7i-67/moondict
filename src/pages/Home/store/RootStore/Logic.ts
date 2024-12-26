import {makeAutoObservable, runInAction} from '@quarkunlimit/qu-mobx';
import {ILogic, TLoadingStore} from './interface';
import {RootStore} from './';
import wordData from '../../../../assets/json/word.json';
import {IOrginWord, IPagination} from '../../../../interface';

const initPagination: IPagination = {
  pageSize: 40,
  index: 1,
};

export class Logic implements ILogic {
  loadingStore: TLoadingStore;
  rootStore: RootStore;
  words: IOrginWord[] = [];
  pagination: IPagination = {
    ...initPagination,
  };

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    this.loadingStore = rootStore.loadingStore;
    makeAutoObservable(this, {}, {autoBind: true});
  }

  async init() {
    const {global} = this.rootStore;
    global.logic.showLoading('数据加载中...');

    await new Promise((res, rej) => {
      setTimeout(() => {
        runInAction(() => {
          this.words = wordData;
        });
        res(true);
      }, 0);
    });
    runInAction(() => {
      global.logic.hiddenLoading();
    });
  }

  showMore() {
    const {computed} = this.rootStore;
    if (!computed.haveMore) {
      return;
    }
    this.pagination.index = this.pagination.index + 1;
  }

  resetList() {
    const {refs, global} = this.rootStore;
    this.pagination.index = 1;
    this.pagination.pageSize = global.logic.filter.compact
      ? global.logic.wordSize.pageSize
      : 40;
    refs.listRef.current?.scrollToOffset({animated: false, offset: 0});
  }
}
