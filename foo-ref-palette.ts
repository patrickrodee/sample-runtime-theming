export interface FooRefPalette {
  readonly black?: string;
  readonly blue200?: string;
  readonly blue300?: string;
  readonly blue600?: string;
  readonly grey300?: string;
  readonly grey700?: string;
  readonly white?: string;
}

export function fooRefPalette(): FooRefPalette {
  return {
    black: "#000",
    blue200: "#aecbfa",
    blue300: "#8ab4f8",
    blue600: "#1a73e8",
    grey300: "#dadce0",
    grey700: "#5f6368",
    white: "#fff"
  };
}
