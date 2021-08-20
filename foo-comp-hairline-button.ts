import { FooSysColor } from "./foo-sys-color";
import { FooSysTypescale } from "./foo-sys-typescale";

export interface FooCompHairlineButton {
  readonly containerHeight?: string;
  readonly labelTextColor?: string;
  readonly labelTextFont?: string;
  readonly outlineColor?: string;
}

export interface FooCompHairlineButtonDependencies {
  readonly fooSysColor?: FooSysColor;
  readonly fooSysTypescale?: FooSysTypescale;
}

export function fooCompHairlineButton(
  dependencies?: FooCompHairlineButtonDependencies
): FooCompHairlineButton {
  const { fooSysColor, fooSysTypescale } = dependencies;
  return {
    labelTextColor: fooSysColor?.primary,
    labelTextFont: fooSysTypescale?.buttonFont,
    outlineColor: fooSysColor?.hairline,
    containerHeight: "36px"
  };
}
