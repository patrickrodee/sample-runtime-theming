import { LitElement, html, customElement, property, css } from 'lit-element';
import { StyleInfo, styleMap } from 'lit-html/directives/style-map';

import { FilledButton } from './filled-button';
import { HairlineButton } from './hairline-button';
import * as tokens from './tokens';

enum Theme {
  LIGHT = 'Light',
  DARK = 'Dark',
  UNKNOWN = 'Unknown'
}

@customElement('theme-toggle')
class ThemeToggle extends LitElement {
  change(theme: Theme) {
    return () => {
      const evt = new CustomEvent('theme-change', {
        detail: {
          theme
        },
        bubbles: true,
        composed: true
      });
      this.dispatchEvent(evt);
    };
  }

  renderRadio(theme: Theme) {
    return html`
      <label>
        <input
          type="radio"
          name="theme"
          value="${theme}"
          @change="${this.change(theme)}"
        />
        <span>${theme}</span>
      </label>
    `;
  }

  render() {
    return html`
      ${this.renderRadio(Theme.LIGHT)}
      <br />
      ${this.renderRadio(Theme.DARK)}
    `;
  }
}

const lightTheme = tokens.fooSysColorLight({
  fooRefPalette: tokens.fooRefPalette()
});

const darkTheme = tokens.fooSysColorDark({
  fooRefPalette: tokens.fooRefPalette()
});

const typescale = tokens.fooSysTypescale({
  fooRefTypeface: tokens.fooRefTypeface()
});

const deps = {
  fooSysColor: lightTheme,
  fooSysTypescale: typescale
};

@customElement('theme-switcher')
export class ThemeSwitcher extends LitElement {
  static styles = [
    css`
      #view {
        padding: 1rem;
      }
    `,
    FilledButton.themeStyleSheet(tokens.fooCompFilledButton(deps)),
    HairlineButton.themeStyleSheet(tokens.fooCompHairlineButton(deps))
  ];

  @property()
  theme = Theme.UNKNOWN;

  colorChange(event) {
    this.theme = event.detail.theme;
  }

  colorScheme(theme: Theme): tokens.FooSysColor | null {
    switch (theme) {
      case Theme.LIGHT:
        return lightTheme;
      case Theme.DARK:
        return darkTheme;
      default:
        return null;
    }
  }

  renderTheme(theme: Theme) {
    const fooSysColor = this.colorScheme(theme);
    if (fooSysColor == null) {
      return '';
    }

    const fooSysTypescale = tokens.fooSysTypescale({
      fooRefTypeface: tokens.fooRefTypeface()
    });

    const filledButtonTheme = tokens.fooCompFilledButton({
      fooSysColor,
      fooSysTypescale
    });

    const hairlineButtonTheme = tokens.fooCompHairlineButton({
      fooSysColor,
      fooSysTypescale
    });

    return styleMap({
      ...FilledButton.theme(filledButtonTheme),
      ...HairlineButton.theme(hairlineButtonTheme),
      backgroundColor: fooSysColor.background,
      color: fooSysColor.onBackground
    });
  }

  render() {
    return html`
      <div @theme-change=${this.colorChange}>
        <theme-toggle></theme-toggle>
        <hr />
        <div id="view" style=${this.renderTheme(this.theme)}>
          <p>You chose theme "${this.theme}"</p>
          <slot></slot>
        </div>
      </div>
    `;
  }
}
