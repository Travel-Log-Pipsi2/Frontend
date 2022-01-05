import { ITheme } from './styled';

const theme: ITheme = {
  colors: {
    black: 'hsl(0, 0%, 21%)',
    white: 'hsl(240, 0%, 95%)',
    grayLight: 'hsl(240, 0%, 86%)',
    grayDark: 'hsl(0, 0%, 28%)',
    pastelDanger: {
      700: 'hsl(0, 90%, 60%)',
      500: 'hsl(0, 80%, 70%)',
      300: 'hsl(0, 70%, 80%)',
    },
    pastelSuccess: {
      300: 'hsl(120, 35%, 64%)',
      500: 'hsl(120, 45%, 54%)',
      700: 'hsl(120, 65%, 44%)',
    },
    primary: {
      100: 'hsl(218, 72%, 83%)',
      300: 'hsl(218, 82%, 73%)',
      500: 'hsl(218, 92%, 63%)',
      700: 'hsl(218, 96%, 53%)',
      900: 'hsl(218, 100%, 43%)',
    },
  },
  typography: {
    family: {
      main: 'Poppins, Arial, sans-serif',
    },
    size: {
      h1: '2rem',
      h2: '2.5rem',
      h3: '2rem',
      h4: '1.5rem',
      p: '16px',
      small: '0.75rem',
    },
  },
  breakpoints: {
    tablet: ' 768px',
    desktop: '1024px',
  },
};

const themeDark: ITheme = {
  colors: {
    black: 'hsl(240, 0%, 95%)',
    white: 'hsl(0, 0%, 21%)',
    grayLight: 'hsl(0, 0%, 28%)',
    grayDark: 'hsl(240, 0%, 86%)',
    pastelDanger: {
      700: 'hsl(0, 90%, 60%)',
      500: 'hsl(0, 80%, 70%)',
      300: 'hsl(0, 70%, 80%)',
    },
    pastelSuccess: {
      300: 'hsl(120, 35%, 64%)',
      500: 'hsl(120, 45%, 54%)',
      700: 'hsl(120, 65%, 44%)',
    },
    primary: {
      100: 'hsl(218, 72%, 83%)',
      300: 'hsl(218, 82%, 73%)',
      500: 'hsl(218, 92%, 63%)',
      700: 'hsl(218, 96%, 53%)',
      900: 'hsl(218, 100%, 43%)',
    },
  },
  typography: {
    family: {
      main: 'Poppins, Arial, sans-serif',
    },
    size: {
      h1: '2rem',
      h2: '2.5rem',
      h3: '2rem',
      h4: '1.5rem',
      p: '16px',
      small: '0.75rem',
    },
  },
  breakpoints: {
    tablet: ' 768px',
    desktop: '1024px',
  },
};
export { theme, themeDark };
