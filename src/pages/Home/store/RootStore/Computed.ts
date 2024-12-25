import {makeAutoObservable} from '@quarkunlimit/qu-mobx';
import {IComputed} from './interface';
import {RootStore} from './';

export class Computed implements IComputed {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this, {}, {autoBind: true});
  }

  get showList() {
    const {logic} = this.rootStore;
    return logic.words;
  }

  get dataSource() {
    const {logic} = this.rootStore;
    return this.showList.slice(
      0,
      logic.pagination.index * logic.pagination.pageSize,
    );
  }

  get haveMore() {
    const {logic} = this.rootStore;
    return (
      logic.pagination.index * logic.pagination.pageSize < this.showList.length
    );
  }
}
