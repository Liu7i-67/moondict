import {LoadingStore} from '@quarkunlimit/qu-mobx';
import {GlobalStore} from '.';
import {Logic} from './Logic';
import {Computed} from './Computed';
import {EPage, IFilter, ISize, IWord} from '../interface';

export type TLoadingStore = LoadingStore<'loading'>;

/** 逻辑接口 */
export interface ILogic {
  loadingStore: TLoadingStore;
  rootStore: GlobalStore;
  /** @param 全局的loading弹窗 */
  loading: boolean;
  /** @param loading弹窗提示的文字 */
  loadingText: string;
  /** @param 当前展示的页面 */
  currentPage: EPage;
  /** @param 点击返回的次数 */
  backCount: number;
  /** @param 需要渲染的页面 */
  renderPage: Set<EPage>;
  /** @param 搜索信息 */
  filter: IFilter;
  /** @param 紧凑模式字符展示信息 */
  wordSize: ISize;
  /** @param 当前查看的详情信息 */
  currentWord: string;
  /** @function 切换当前展示的页面 */
  changePage(page: EPage): void;
  /** @function 打开弹窗 */
  showLoading(text?: string): void;
  /** @function 关闭弹窗 */
  hiddenLoading(): void;
  /** @function 返回首页 */
  backHome(): void;
  /** @function 清空返回次数 */
  clearBackCount(): void;
  /** @function 新增返回次数 */
  addBackCount(): void;
  /** @function 程序初始化 */
  init(): void;
  /** @function 选择过滤分类 */
  selectFilterType(type: string): void;
  /** @function 修改查看模式 */
  changeCompact(): void;
  /** @function 查看文字详情 */
  showWordDetail(word: string): void;
}

/** 计算属性接口 */
export interface IComputed {
  rootStore: GlobalStore;
}

/** 根Store接口 */
export interface IGlobalStore {
  logic: Logic;
  computed: Computed;
  loadingStore: TLoadingStore;
}
