import { ITheme } from './styled';

const theme: ITheme = {
  colors: {
    black: '#353535',
    white: '#F3F3F4',
    primary: {
      100: '#b9aeee',
      300: '#8f7de4',
      500: 'hsl(218, 92%, 63%)',
      700: '#51409b',
      900: '#2e2558',
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
};

export { theme };
