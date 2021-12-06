import * as S from './styles';

interface Props {
  id: string;
  onLabel?: string;
  offLabel?: string;
  onChange?: () => void;
  currentValue?: boolean;
}

const Switch = ({ id, onLabel, offLabel, onChange, currentValue }: Props) => (
  <S.Label htmlFor={id}>
    <S.Input
      onChange={onChange}
      checked={!!currentValue}
      type="checkbox"
      id={id}
    />
    <S.Span>
      <small>{onLabel}</small>
      <small>{offLabel}</small>
    </S.Span>
  </S.Label>
);

export default Switch;
