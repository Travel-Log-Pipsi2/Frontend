import { StyledGhostButton } from 'components/shared';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import useAuth from 'utils/hooks/useAuth';
import useFriendsStatistic from 'utils/hooks/useFriendStatistics';
import FacebookLogin from 'react-facebook-login';
import * as S from './styles';

const UserDetails = (): JSX.Element => {
  const { t } = useTranslation('common');
  const { logoutCtx, user } = useAuth();
  const { isFriendView } = useFriendsStatistic();

  const responseFacebook = (fbResponse) => {
    console.log(fbResponse);
  };

  const handleLogoutButton = () => {
    logoutCtx();
    toast.success('Do zobaczenia wkrótce.');
  };

  return (
    <S.Wrapper>
      <h3>{t('common.profile_page.ui.info.title')}</h3>

      <ul>
        <li>
          <span>{'ID: '}</span>
          <span>{user.id}</span>
        </li>
        <li>
          <span>{`${t('common.profile_page.ui.info.name')}: `}</span>
          <span>{user.username}</span>
        </li>
        {user.email && (
          <li>
            <span>{`${t('common.profile_page.ui.info.email')}: `}</span>
            <span>{user.email}</span>
          </li>
        )}
      </ul>
      {!isFriendView && (
        <StyledGhostButton onClick={handleLogoutButton}>
          {t('common.profile_page.ui.info.logout_btn')}
        </StyledGhostButton>
      )}

      {!isFriendView && (
        <FacebookLogin
          appId="1106139623477619"
          fields="name,email"
          scope="public_profile,user_posts"
          callback={responseFacebook}
          icon="fa-facebook"
          cssClass="my-facebook-button-class"
          textButton="Facebook"
        />
      )}
    </S.Wrapper>
  );
};

export default UserDetails;
