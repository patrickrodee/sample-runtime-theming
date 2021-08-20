import { FooRefPalette } from "./foo-ref-palette";
import { FooSysColor } from "./foo-sys-color";

export interface FooSysColorLightDependencies {
  readonly fooRefPalette?: FooRefPalette;
}

export function fooSysColorLight(
  dependencies: FooSysColorLightDependencies
): FooSysColor {
  const { fooRefPalette } = dependencies;
  return {
    background: fooRefPalette.white,
    onBackground: fooRefPalette.black,
    primary: fooRefPalette.blue600,
    onPrimary: fooRefPalette.white,
    hairline: fooRefPalette.grey300
  };
}
