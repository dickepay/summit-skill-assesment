export type IconsId =
  | "close-2"
  | "close"
  | "logo";

export type IconsKey =
  | "Close_2"
  | "Close"
  | "Logo";

export enum Icons {
  Close_2 = "close-2",
  Close = "close",
  Logo = "logo",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Close_2]: "61697",
  [Icons.Close]: "61698",
  [Icons.Logo]: "61699",
};
