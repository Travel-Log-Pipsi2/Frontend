import { Statistics, UserDetails } from 'components/profile';
import useFriendsStatistic from 'utils/hooks/useFriendStatistics';
import { useTranslation } from 'react-i18next';

const Profile = (): JSX.Element => {
  const { t } = useTranslation('common');
  const { isFriendView } = useFriendsStatistic();

  return (
    <section>
      {!isFriendView ? (
        <h2>{t('common.profile_page.ui.title')}</h2>
      ) : (
        <h2>{t('common.profile_page.ui.friend_title')}</h2>
      )}
      <Statistics />
      <UserDetails />
    </section>
  );
};

export default Profile;
