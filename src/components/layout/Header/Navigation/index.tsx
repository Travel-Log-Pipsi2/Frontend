import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import AddSVG from 'static/icons/add';
import FriendsSVG from 'static/icons/friends';
import ProfileSVG from 'static/icons/profile';
import * as S from './styles';

interface INavigation {
  isHidden: boolean;
}

const Navigation = ({ isHidden }: INavigation) => {
  const { t } = useTranslation('common');

  return (
    <S.Nav isHidden={isHidden}>
      <ul>
        <li>
          <NavLink to="/add-travel" activeClassName="active">
            <AddSVG />
            <span>{t('common.header.navigation.add')}</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/test" activeClassName="active">
            <ProfileSVG />
            <span>{t('common.header.navigation.profile')}</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/test2" activeClassName="active">
            <FriendsSVG />
            <span>{t('common.header.navigation.friends')}</span>
          </NavLink>
        </li>
      </ul>
    </S.Nav>
  );
};

export default Navigation;
