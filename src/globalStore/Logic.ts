import {makeAutoObservable} from '@quarkunlimit/qu-mobx';
import {ILogic, TLoadingStore} from './interface';
import {GlobalStore} from '.';
import {EPage} from '../interface';
export class Logic implements ILogic {
  loadingStore: TLoadingStore;
  rootStore: GlobalStore;
  loading = false;
  loadingText = '加载中...';
  currentPage: EPage = EPage.Home;
  backCount = 0;

  constructor(rootStore: GlobalStore) {
    this.rootStore = rootStore;
    this.loadingStore = rootStore.loadingStore;
    makeAutoObservable(this, {}, {autoBind: true});
  }

  clearBackCount() {
    this.backCount = 0;
  }

  addBackCount() {
    this.backCount = this.backCount + 1;
  }

  changePage(page: EPage) {
    this.currentPage = page;
  }

  backHome() {
    this.changePage(EPage.Home);
  }

  showLoading(text?: string) {
    this.loadingText = text || '加载中...';
    this.loading = true;
  }

  hiddenLoading() {
    this.loading = false;
  }

  hardwareBackPress() {
    if (this.currentPage !== EPage.Home) {
      this.backHome();
      this.clearBackCount();
      return true;
    }

    if (this.backCount < 3) {
      this.addBackCount();
      return true;
    }

    this.clearBackCount();
    return false;
  }
}
/*#__PURE__*/ export function refresh() {}
