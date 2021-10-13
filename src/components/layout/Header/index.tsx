import Switch from '../../shared/Switch';
import * as S from './styles';

const Header = () => {
  return (
    <S.Header>
      <Switch id="darkmode" onLabel="D" offLabel="L" />
      <h1>WHIB</h1>
      <Switch id="language" onLabel="EN" offLabel="PL" />
    </S.Header>
  );
};

export default Header;
