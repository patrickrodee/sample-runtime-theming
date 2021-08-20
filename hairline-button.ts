import { StyleInfo } from 'lit-html/directives/style-map.js';
import { LitElement, html, customElement, property, css } from 'lit-element';
import { buildStyleSheet } from './build-style-sheet';

export interface HairlineButtonTheme {
  readonly containerHeight?: string;
  readonly outlineColor?: string;
  readonly labelTextColor?: string;
  readonly labelTextFont?: string;
}

export interface Styles {
  readonly [name: string]: string | undefined;
}

function hairlineButtonTheme(theme: HairlineButtonTheme): Styles {
  return {
    '--hairline-button-container-height': theme.containerHeight,
    '--hairline-button-outline-color': theme.outlineColor,
    '--hairline-button-label-text-color': theme.labelTextColor
  };
}

@customElement('hairline-button')
export class HairlineButton extends LitElement {
  static styles = css`
    #container {
      background: none;
      border-width: 1px;
      border-style: solid;
      border-color: var(--hairline-button-outline-color);
      height: var(--hairline-button-container-height);
      padding: 0 1rem;
    }
    #label {
      color: var(--hairline-button-label-text-color);
      font-family: var(--hairline-button-label-text-font);
    }
  `;

  static theme(theme: HairlineButtonTheme): StyleInfo {
    return {
      '--hairline-button-container-height': theme.containerHeight,
      '--hairline-button-outline-color': theme.outlineColor,
      '--hairline-button-label-text-color': theme.labelTextColor,
      '--hairline-button-label-text-font': theme.labelTextFont
    };
  }

  static themeStyleSheet(theme: HairlineButtonTheme): CSSStyleSheet {
    return buildStyleSheet(HairlineButton.theme(theme));
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
