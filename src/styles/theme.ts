import { ITheme } from './styled';

const theme: ITheme = {
  colors: {
    black: '#353535',
    white: '#F3F3F4',
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
    black: '#F3F3F4',
    white: '#353535',
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
