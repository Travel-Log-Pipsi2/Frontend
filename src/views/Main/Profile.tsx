import { Statistics } from 'components/profile';
import { useTranslation } from 'react-i18next';

const Profile = (): JSX.Element => {
  const { t } = useTranslation('common');

  return (
    <section>
      <h2>{t('common.profile_page.ui.title')}</h2>
      <Statistics />
    </section>
  );
};

export default Profile;
