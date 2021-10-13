import * as S from './styles';

interface Props {
  id: string;
  onLabel?: string;
  offLabel?: string;
}

const Switch = ({ id, onLabel, offLabel }: Props) => {
  return (
    <S.Label htmlFor={id}>
      <S.Input type="checkbox" id={id} />
      <S.Span>
        <small>{onLabel}</small>
        <small>{offLabel}</small>
      </S.Span>
    </S.Label>
  );
};

export default Switch;
