import type { Element, Path } from "../types/character";

export const ELEMENTS: Element[] = ["物理", "火", "冰", "雷", "风", "量子", "虚数"];
export const PATHS: Path[] = ["毁灭", "巡猎", "智识", "和谐", "虚无", "存护", "丰饶", "记忆", "欢愉"];

/** 属性主题色：用于卡片边框、徽章、立绘底色 */
export const ELEMENT_COLORS: Record<Element, string> = {
  物理: "#E8E4D9",
  火: "#FF9F45",
  冰: "#7DD3FC",
  雷: "#C084FC",
  风: "#6EE7B7",
  量子: "#818CF8",
  虚数: "#FDE047",
};
