import { FooRefTypeface } from "./foo-ref-typeface";

export interface FooSysTypescale {
  readonly buttonFont?: string;
}

export interface FooSysTypescaleDependencies {
  fooRefTypeface?: FooRefTypeface;
}

export function fooSysTypescale(
  dependencies: FooSysTypescaleDependencies
): FooSysTypescale {
  const { fooRefTypeface } = dependencies;
  return {
    buttonFont: fooRefTypeface?.brandMedium
  };
}
