import { StyleInfo } from 'lit-html/directives/style-map.js';

export function buildStyleSheet(styleInfo: StyleInfo): CSSStyleSheet {
  const style = new CSSStyleSheet();
  const styleText = [];
  for (const prop of Object.keys(styleInfo)) {
    styleText.push(`${prop}: ${styleInfo[prop]};`);
  }

  style.addRule(':host', styleText.join(''));
  return style;
}
