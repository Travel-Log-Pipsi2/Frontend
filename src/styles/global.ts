import { createGlobalStyle } from 'styled-components';
import { ITheme } from './styled';

export const GlobalStyles = createGlobalStyle<{ theme: ITheme }>`

*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    scroll-behavior: smooth;
    font-size: ${({ theme }) => theme.typography.size.p};
    font-family: ${({ theme }) => theme.typography.family.main};
}

body {
    background-color: ${({ theme }) => theme.colors.white};

    h1{
        font-size: ${({ theme }) => theme.typography.size.h1};
    }

    h2{
        font-size: ${({ theme }) => theme.typography.size.h2};
    }

    h3{
        font-size: ${({ theme }) => theme.typography.size.h3};
    }

    h4{
        font-size: ${({ theme }) => theme.typography.size.h4};
    }

    p{
        font-size: ${({ theme }) => theme.typography.size.p};
    }

    small{
        font-size: ${({ theme }) => theme.typography.size.small};
    }

    ul,li {
        list-style: none;
    }

    button {
        outline: none;
        border: none;
    }

    a {
        text-decoration: none;
    }
}
`;
