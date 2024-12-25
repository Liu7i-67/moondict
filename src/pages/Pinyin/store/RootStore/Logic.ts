import {makeAutoObservable} from '@quarkunlimit/qu-mobx';
import {ILogic, TLoadingStore} from './interface';
import {RootStore} from './';
import typeData from '../../../../assets/json/type.json';
import {IWordType} from '../../../../interface';
export class Logic implements ILogic {
  loadingStore: TLoadingStore;
  rootStore: RootStore;
  typeData: IWordType[] = [];

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    this.loadingStore = rootStore.loadingStore;
    makeAutoObservable(this, {}, {autoBind: true});
  }

  init() {
    this.typeData = typeData;
  }
}
