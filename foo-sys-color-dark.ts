import { FooRefPalette } from "./foo-ref-palette";
import { FooSysColor } from "./foo-sys-color";

export interface FooSysColorDarkDependencies {
  readonly fooRefPalette?: FooRefPalette;
}

export function fooSysColorDark(
  dependencies: FooSysColorDarkDependencies
): FooSysColor {
  const { fooRefPalette } = dependencies;
  return {
    background: fooRefPalette.black,
    onBackground: fooRefPalette.white,
    primary: fooRefPalette.blue300,
    onPrimary: fooRefPalette.black,
    hairline: fooRefPalette.grey700
  };
}
