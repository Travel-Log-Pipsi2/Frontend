/* eslint-disable no-unused-expressions */
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useTheme from 'utils/hooks/useTheme';
import Switch from '../../shared/Switch';
import Navigation from './Navigation';
import * as S from './styles';

const Header = () => {
  const [isHidden, setHiden] = useState(false);
  const [isPolish, setPolish] = useState(false);
  const { changeTheme, isDarkMode } = useTheme();
  const { i18n } = useTranslation(['addTravel', 'common']);

  useEffect(() => {
    isPolish ? i18n.changeLanguage('pl') : i18n.changeLanguage('en');
  }, [isPolish, i18n]);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y < prevPos.y;
      // console.log(currPos);
      if (isShow !== isHidden) setHiden(isShow);
      // OGARNAC NA SAFARI SCROLL OD PEWNEGO MOMNETU
    },
    [isHidden]
  );

  const changeLanguage = () => {
    setPolish((prev) => !prev);
  };

  return (
    <S.Header isHidden={isHidden}>
      <Switch
        onChange={changeTheme}
        currentValue={isDarkMode}
        id="darkmode"
        onLabel="D"
        offLabel="L"
      />
      <Switch
        currentValue={isPolish}
        onChange={changeLanguage}
        id="language"
        onLabel="EN"
        offLabel="PL"
      />

      <h1>WHIB</h1>

      <Navigation isHidden={isHidden} />
    </S.Header>
  );
};

export default Header;
