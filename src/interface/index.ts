export enum EPage {
  /** @param 首页 */
  Home = 'Home',
  /** @param 按拼音查找 */
  Pinyin = 'Pinyin',
}

export interface IOrginWord {
  /** @param 编号 */
  no: number;
  /** @param 字 */
  word: string;
  /** @param 音调 */
  affix: string;
  /** @param 拼音 */
  type: string;
  /** @param 笔画 */
  strokes: number;
}

export interface IWord extends IOrginWord {}

export interface IPagination {
  /** @param 每页条目 */
  pageSize: number;
  /** @param 当前页码 */
  index: number;
}

export interface IWordType {
  /** @param 拼音前缀 */
  type: string;
  /** @param 拼音 */
  option: string[];
}

export interface IFilter {
  /** @param 当前选中的拼音 */
  type: string;
  /** @param 紧凑模式 */
  compact: boolean;
}

export interface ISize {
  /** @param 每行多少个 */
  numColumns: number;
  /** @param 一共多少行 */
  rowNums: number;
  /** @param 分页数量 */
  pageSize: number;
  /** @param 首屏加载数量 */
  initialNumToRender: number;
}
