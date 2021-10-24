import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { useState } from 'react';
import Switch from '../../shared/Switch';
import Navigation from './Navigation';
import * as S from './styles';

const Header = () => {
  const [isHidden, setHiden] = useState(false);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y < prevPos.y;
      // console.log(currPos);
      if (isShow !== isHidden) setHiden(isShow);
      // OGARNAC NA SAFARI SCROLL OD PEWNEGO MOMNETU
    },
    [isHidden]
  );

  return (
    <S.Header isHidden={isHidden}>
      <Switch id="darkmode" onLabel="D" offLabel="L" />
      <Switch id="language" onLabel="EN" offLabel="PL" />

      <h1>WHIB</h1>

      <Navigation isHidden={isHidden} />
    </S.Header>
  );
};

export default Header;
