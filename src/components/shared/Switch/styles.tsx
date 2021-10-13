import styled from 'styled-components';

const Span = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 16px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  &::before {
    position: absolute;
    content: '';
    width: 20px;
    height: 20px;
    background-color: ${({ theme }) => theme.colors.black};
    top: 2px;
    left: 2px;
    border-radius: 12px;

    transition: all 300ms ease;
  }
`;

const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
`;

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${Span}:before {
    transform: translateX(20px);
  }
`;
export { Label, Input, Span };
