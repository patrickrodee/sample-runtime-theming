export interface FooRefTypeface {
  readonly brandDisplayRegular?: string;
  readonly brandMedium?: string;
  readonly brandRegular?: string;
  readonly plainMedium?: string;
  readonly plainRegular?: string;
}

export function fooRefTypeface(): FooRefTypeface {
  return {
    brandDisplayRegular: "Comic Sans",
    brandMedium: "cursive",
    brandRegular: "monospace",
    plainMedium: "Arial",
    plainRegular: "cursive"
  };
}
