import { routes } from 'constants/routes';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import AuthAPI from 'services/api';
import useAuth from 'utils/hooks/useAuth';
import * as S from './styles';

const FriendsList = (): JSX.Element => {
  const { t } = useTranslation('common');
  const { user, updateUserData } = useAuth();
  const { friends = [] } = user;

  const handleDelete = (userId: string) => {
    AuthAPI.deleteFriend(userId)
      .then(() => {
        updateUserData();
      })
      .catch(() => console.log());
  };

  return (
    <S.Wrapper>
      <h3>{t('common.friends_page.ui.title_friends')}</h3>

      <ul>
        {friends.length > 0 ? (
          friends.map(({ username, id }) => (
            <li key={id}>
              <Link to={`${routes.friendProfile}/${id}`}>{username}</Link>
              <button type="button" onClick={() => handleDelete(id)}>
                {t('common.friends_page.ui.delete_btn')}
              </button>
            </li>
          ))
        ) : (
          <li>{t('common.friends_page.ui.no_friends')}</li>
        )}
      </ul>
    </S.Wrapper>
  );
};

export default FriendsList;
