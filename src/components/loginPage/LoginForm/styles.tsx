import { StyledPrimaryButton } from 'components/shared';
import styled from 'styled-components';

const Section = styled.div`
  margin-inline: auto;
  margin-top: 72px;
  max-width: 400px;

  a {
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.typography.size.small};
  }

  h1 {
    color: ${(props) => props.theme.colors.black};
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  margin-inline: auto;
  padding-inline: 24px;

  > .input-wrapper {
    width: 100%;
  }

  .my-facebook-button-class {
    padding: 12px 28px;
    border: 1px solid ${({ theme }) => theme.colors.black};
    border-radius: 8px;
    font-size: ${({ theme }) => theme.typography.size.p};
    font-weight: 700;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;
  }
`;

const Button = styled(StyledPrimaryButton)`
  width: 200px;
`;

export { Form, Section, Button };
