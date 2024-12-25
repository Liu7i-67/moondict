import {makeAutoObservable} from '@quarkunlimit/qu-mobx';
import {IComputed} from './interface';
import {RootStore} from './';
import {EPage} from '../../../../interface';

export class Computed implements IComputed {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this, {}, {autoBind: true});
  }

  get navs() {
    return [
      {
        label: '按拼音查找',
        page: EPage.Pinyin,
      },
    ];
  }
}
