import { useTranslation } from 'react-i18next';
import useAuth from 'utils/hooks/useAuth';
import * as S from './styles';

const Statistics = (): JSX.Element => {
  const { t } = useTranslation('common');
  const {
    user: { statistics },
  } = useAuth();
  const {
    countryCount,
    currentYearCountryCount,
    currentYearTravelCount,
    dayTravelCount,
    mostTravelledToCountry,
    mostTravelledCountryAmount,
    travelCount,
    markerCount,
  } = statistics;
  console.log(statistics);

  return (
    <S.Wrapper>
      <h3>{t('common.profile_page.ui.stats.title')}</h3>
      <ul>
        <li>
          <span>{t('common.profile_page.ui.stats.all_places')}</span>
          <span>{markerCount}</span>
        </li>
        <li>
          <span>{t('common.profile_page.ui.stats.all_countries')}</span>
          <span>{countryCount}</span>
        </li>
        <li>
          <span>{t('common.profile_page.ui.stats.all_travels')}</span>
          <span>{travelCount}</span>
        </li>
        <li>
          <span>{t('common.profile_page.ui.stats.add_days_in_travel')}</span>
          <span>{dayTravelCount}</span>
        </li>
        <li>
          <span>{t('common.profile_page.ui.stats.curr_year_countries')}</span>
          <span>{currentYearCountryCount}</span>
        </li>
        <li>
          <span>{t('common.profile_page.ui.stats.curr_year_travels')}</span>
          <span>{currentYearTravelCount}</span>
        </li>
        <li>
          <span>{t('common.profile_page.ui.stats.most_visited_country')}</span>
          <span>{mostTravelledToCountry}</span>
        </li>
      </ul>
    </S.Wrapper>
  );
};

export default Statistics;
