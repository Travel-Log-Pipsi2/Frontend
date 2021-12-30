import { StyledPrimaryButton } from 'components/shared';
import styled from 'styled-components';

const Section = styled.div`
  margin-inline: auto;
  margin-top: 72px;

  a {
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.typography.size.small};
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
`;

const Button = styled(StyledPrimaryButton)``;

export { Form, Section, Button };
