import {makeAutoObservable} from '@quarkunlimit/qu-mobx';
import {ILogic, TLoadingStore} from './interface';
import {RootStore} from './';
import wordData from '../../../../assets/json/word.json';
import {IOrginWord, IPagination} from '../../../../interface';

const initPagination: IPagination = {
  pageSize: 20,
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

  init() {
    this.words = wordData;
  }

  showMore() {
    const {computed} = this.rootStore;
    if (!computed.haveMore) {
      return;
    }
    this.pagination.index = this.pagination.index + 1;
  }
}
