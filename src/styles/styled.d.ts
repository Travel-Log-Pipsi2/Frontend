export interface ITheme {
  colors: {
    primary: ColorType | string;
    black: ColorType | string;
    white: ColorType | string;
  };
  typography: {
    family: FontFamilyType;
    size: FontSizeType;
  };
}

type ColorType = {
  [key: string | number]: string;
};

type FontFamilyType = {
  main: string;
  secondary?: string;
};

type FontSizeType = {
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h5?: string;
  h6?: string;
  p: string;
  small: string;
};
