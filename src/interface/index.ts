export enum EPage {
  /** @param 首页 */
  Home = 'Home',
  /** @param 按拼音查找 */
  Pinyin = 'Pinyin',
  /** @param 详情页 */
  Detail = 'Detail',
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

export interface IWordDetail {
  /** @param 字 */
  word: string;
  /** @param 内容 */
  detail: IDetailBlock[];
  /** @param 分类 */
  type: string;
  /** @param 拼音 */
  pinyin: string[];
  /** @param 部首  */
  radical: string;
  /** @param 部外笔画 */
  stroke: string;
  /** @param 总笔画 */
  total_stroke: string;
  /** @param 繁部  */
  t_radical: string;
  /** @param 繁部外笔画 */
  t_stroke: string;
  /** @param 繁部总笔画 */
  t_total_stroke: string;
  /** @param 笔顺 */
  stroke_order: string;
  /** @param 繁体 */
  traditional: string;
  /** @param 简体 */
  simplified: string;
  /** @param 输入方法 */
  input_method: {
    /** @param 仓颉 */
    bopomofo: string;
    /** @param 四角号码 */
    number: string;
    /** @param unicode */
    unicode: string;
    /** @param 五笔 */
    wubi: string;
  };
}

export interface IDetailBlock {
  /** @param 标题 */
  title: string;
  /** @param 内容 */
  content: IContentItem[][];
}

export interface IContentItem {
  /** @param 类型 */
  type: EContentItem;
  /** @param 内容 */
  content: string;
  /** @param 类名 */
  class?: string[];
}

export enum EContentItem {
  /** @param 文本 */
  text = 'text',
  /** @param 换行符 */
  br = 'br',
  /** @param 跳转 */
  a = 'a',
}
