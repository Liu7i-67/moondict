import {makeAutoObservable} from '@quarkunlimit/qu-mobx';
import {ILogic, TLoadingStore} from './interface';
import {GlobalStore} from '.';
import {EPage, IFilter, ISize, IWord} from '../interface';
import {ScaledSize} from 'react-native';

export class Logic implements ILogic {
  loadingStore: TLoadingStore;
  rootStore: GlobalStore;
  loading = false;
  loadingText = '加载中...';
  currentPage: EPage = EPage.Home;
  backCount = 0;
  renderPage: Set<EPage> = new Set();
  filter: IFilter = {
    type: '',
    compact: false,
  };
  wordSize: ISize = {
    numColumns: 0,
    rowNums: 10,
    pageSize: 60,
    initialNumToRender: 40,
  };
  currentWord: string = '';

  constructor(rootStore: GlobalStore) {
    this.rootStore = rootStore;
    this.loadingStore = rootStore.loadingStore;
    makeAutoObservable(this, {}, {autoBind: true});
  }

  init() {
    this.renderPage = new Set();
    this.renderPage.add(this.currentPage);
  }

  clearBackCount() {
    this.backCount = 0;
  }

  addBackCount() {
    this.backCount = this.backCount + 1;
  }

  changePage(page: EPage) {
    this.currentPage = page;
    this.renderPage.add(this.currentPage);
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

  selectFilterType(type: string) {
    this.filter.type = type;
  }

  changeCompact() {
    this.filter.compact = !this.filter.compact;
  }

  calculatePageSize(window: ScaledSize) {
    const w = Math.floor(window.width);
    const h = Math.floor(window.height);

    const numColumns = Math.floor((w - 16) / 34);
    const rowNums = Math.floor((h - 16 - 40) / 34);
    const pageSize = Math.floor(numColumns * rowNums * 1.5);
    const initialNumToRender = numColumns * rowNums;
    this.wordSize = {
      numColumns,
      rowNums,
      pageSize,
      initialNumToRender,
    };
  }

  showWordDetail(word?: string) {
    this.currentWord = word || '';
    this.changePage(EPage.Detail);
  }
}
/*#__PURE__*/ export function refresh() {}
