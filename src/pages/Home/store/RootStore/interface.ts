import {LoadingStore} from '@quarkunlimit/qu-mobx';
import {RootStore} from './';
import {Logic} from './Logic';
import {Computed} from './Computed';
import {GlobalStore} from '../../../../globalStore';
import {FlatList} from 'react-native';
import {IOrginWord, IPagination, IWord} from '../../../../interface';

export type TLoadingStore = LoadingStore<'loading' | 'init' | 'saveData'>;

/** 逻辑接口 */
export interface ILogic {
  loadingStore: TLoadingStore;
  rootStore: RootStore;
  /** @param 字列表 */
  words: IOrginWord[];
  /** @param 分页信息 */
  pagination: IPagination;
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
  listRef: React.MutableRefObject<FlatList<IWord> | null>;
}
