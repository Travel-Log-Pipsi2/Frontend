import { useTranslation } from 'react-i18next';
import AuthAPI from 'services/api';
import useAuth from 'utils/hooks/useAuth';
import * as S from './styles';

const FriendsList = () => {
  const { t } = useTranslation('common');
  const { user, updateUserData } = useAuth();
  const { friends = [] } = user;

  const handleDelete = (userId: string) => {
    AuthAPI.deleteFriend(userId)
      .then((res) => {
        console.log(res);
        updateUserData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <S.Wrapper>
      <h3>{t('common.friends_page.ui.title_friends')}</h3>

      <ul>
        {friends.length > 0 ? (
          friends.map(({ username, id }) => (
            <li key={id}>
              <span>{username}</span>
              <button type="button" onClick={() => handleDelete(id)}>
                {t('common.friends_page.ui.delete_btn')}
              </button>
            </li>
          ))
        ) : (
          <li>Pusto</li>
        )}
      </ul>
    </S.Wrapper>
  );
};

export default FriendsList;
