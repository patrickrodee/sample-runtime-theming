import { StyleInfo } from 'lit-html/directives/style-map.js';
import { LitElement, html, customElement, property, css } from 'lit-element';
import { buildStyleSheet } from './build-style-sheet';

export interface FilledButtonTheme {
  readonly containerColor?: string;
  readonly containerHeight?: string;
  readonly labelTextColor?: string;
  readonly labelTextFont?: string;
}

@customElement('filled-button')
export class FilledButton extends LitElement {
  static styles = css`
    #container {
      background-color: var(--filled-button-container-color);
      border: none;
      height: var(--filled-button-container-height);
      padding: 0 1rem;
    }
    #label {
      color: var(--filled-button-label-text-color);
      font-family: var(--filled-button-label-text-font);
    }
  `;

  static theme(theme: FilledButtonTheme): StyleInfo {
    return {
      '--filled-button-container-color': theme.containerColor,
      '--filled-button-container-height': theme.containerHeight,
      '--filled-button-label-text-color': theme.labelTextColor,
      '--filled-button-label-text-font': theme.labelTextFont
    };
  }

  static themeStyleSheet(theme: FilledButtonTheme): CSSStyleSheet {
    return buildStyleSheet(FilledButton.theme(theme));
  }

  @property()
  label = '';

  render() {
    return html`
      <button id="container">
        <span id="label">${this.label}</span>
      </button>
    `;
  }
}
