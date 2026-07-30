export type ThemeMode =
  | "light"
  | "dark";


export type SectionSize =
  | "small"
  | "medium"
  | "large";


export interface SectionTheme {

  theme:
    ThemeMode;


  size?:
    SectionSize;

}