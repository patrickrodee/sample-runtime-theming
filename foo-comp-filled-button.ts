import { FooSysColor } from "./foo-sys-color";
import { FooSysTypescale } from "./foo-sys-typescale";

export interface FooCompFilledButton {
  readonly containerColor?: string;
  readonly containerHeight?: string;
  readonly labelTextColor?: string;
  readonly labelTextFont?: string;
}

export interface FooCompFilledButtonDependencies {
  readonly fooSysColor?: FooSysColor;
  readonly fooSysTypescale?: FooSysTypescale;
}

export function fooCompFilledButton(
  dependencies: FooCompFilledButtonDependencies
): FooCompFilledButton {
  const { fooSysColor, fooSysTypescale } = dependencies;
  return {
    containerColor: fooSysColor?.primary,
    labelTextColor: fooSysColor?.onPrimary,
    labelTextFont: fooSysTypescale?.buttonFont,
    containerHeight: "36px"
  };
}
