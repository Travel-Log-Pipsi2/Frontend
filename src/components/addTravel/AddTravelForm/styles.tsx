import { StyledPrimaryButton, StyledTextarea } from 'components/shared';
import styled from 'styled-components';

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  > * {
    &:first-child,
    &:nth-child(2) {
      grid-column: 1/3;
    }
  }
`;

const Textarea = styled(StyledTextarea)`
  grid-column: 1 / 3;
`;

const Button = styled(StyledPrimaryButton)`
  grid-column: 1 / 3;
  margin-top: 16px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;

  h2 {
    text-align: center;
    color: ${(props) => props.theme.colors.black};
  }
`;

export { Form, Button, Textarea, Wrapper };
