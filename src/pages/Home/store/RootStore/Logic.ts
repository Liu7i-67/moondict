import {makeAutoObservable} from '@quarkunlimit/qu-mobx';
import {ILogic, TLoadingStore} from './interface';
import {RootStore} from './';
import wordData from '../../../../assets/json/word.json';
import {IOrginWord} from '../../../../interface';

export class Logic implements ILogic {
  loadingStore: TLoadingStore;
  rootStore: RootStore;
  words: IOrginWord[] = [];

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    this.loadingStore = rootStore.loadingStore;
    makeAutoObservable(this, {}, {autoBind: true});
  }

  init() {
    this.words = wordData;
  }
}
