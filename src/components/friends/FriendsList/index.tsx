import { useTranslation } from 'react-i18next';
import useAuth from 'utils/hooks/useAuth';
import * as S from './styles';

const FriendsList = () => {
  const { t } = useTranslation('common');
  const { user } = useAuth();
  const { friends = [] } = user;

  return (
    <S.Wrapper>
      <h3>{t('common.friends_page.ui.title_friends')}</h3>

      <ul>
        {friends.length > 0 ? (
          friends.map(({ username, id }) => <li key={id}>{username}</li>)
        ) : (
          <li>Pusto</li>
        )}
      </ul>
    </S.Wrapper>
  );
};

export default FriendsList;
