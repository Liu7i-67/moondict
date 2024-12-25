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
