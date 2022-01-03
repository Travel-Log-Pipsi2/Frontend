import { routes } from 'constants/routes';
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
          <NavLink to={routes.addTravel} activeClassName="active">
            <AddSVG />
            <span>{t('common.header.navigation.add')}</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={routes.profile} activeClassName="active">
            <ProfileSVG />
            <span>{t('common.header.navigation.profile')}</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={routes.friends} activeClassName="active">
            <FriendsSVG />
            <span>{t('common.header.navigation.friends')}</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={routes.travels} activeClassName="active">
            <FriendsSVG />
            <span>{t('common.header.navigation.travels')}</span>
          </NavLink>
        </li>
      </ul>
    </S.Nav>
  );
};

export default Navigation;
