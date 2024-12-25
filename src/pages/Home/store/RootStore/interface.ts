import {LoadingStore} from '@quarkunlimit/qu-mobx';
import {RootStore} from './';
import {Logic} from './Logic';
import {Computed} from './Computed';
import {GlobalStore} from '../../../../globalStore';
import {FlatList} from 'react-native';
import {IOrginWord} from '../../../../interface';

export type TLoadingStore = LoadingStore<'loading' | 'init' | 'saveData'>;

/** 逻辑接口 */
export interface ILogic {
  loadingStore: TLoadingStore;
  rootStore: RootStore;
  /** @param 字列表 */
  words: IOrginWord[];
  /** @function 初始化数据 */
  init(): void;
}

/** 计算属性接口 */
export interface IComputed {
  rootStore: RootStore;
}

/** 根Store接口 */
export interface IRootStore {
  logic: Logic;
  computed: Computed;
  refs: IRefs;
  global: GlobalStore;
  loadingStore: TLoadingStore;
}

export interface IRefs {
  listRef: React.MutableRefObject<FlatList<IArceusMark> | null>;
}

export interface IArceusMark {
  /** @param 洗翠编号 */
  no: string;
  /** @param 全国编号 */
  globalNo: string;
  /** @param 名称 */
  name: string;
  /** @param 属性 */
  attrs: string[];
  /** @param 状态 0-未捕获 1-已捕获 2-已完成 */
  status: number;
  /** @param 图像编号 */
  imageNo: number;
}

export interface IPagination {
  /** @param 每页条目 */
  pageSize: number;
  /** @param 当前页码 */
  index: number;
}
