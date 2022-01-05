import { useTranslation } from 'react-i18next';
import useAuth from 'utils/hooks/useAuth';
import * as S from './styles';

const Statistics = (): JSX.Element => {
  const { t } = useTranslation('common');
  const {
    user: { statistics },
  } = useAuth();
  const {
    allPlaces,
    allCountries,
    allTravels,
    allDaysInTravel,
    currYearCountries,
    currYearTravels,
    mostVisitedCountry,
  } = statistics;

  return (
    <S.Wrapper>
      <ul>
        <li>
          <span>{t('common.profile_page.ui.stats.all_places')}</span>
          <span>{allPlaces}</span>
        </li>
        <li>
          <span>{t('common.profile_page.ui.stats.all_countries')}</span>
          <span>{allCountries}</span>
        </li>
        <li>
          <span>{t('common.profile_page.ui.stats.all_travels')}</span>
          <span>{allTravels}</span>
        </li>
        <li>
          <span>{t('common.profile_page.ui.stats.add_days_in_travel')}</span>
          <span>{allDaysInTravel}</span>
        </li>
        <li>
          <span>{t('common.profile_page.ui.stats.curr_year_countries')}</span>
          <span>{currYearCountries}</span>
        </li>
        <li>
          <span>{t('common.profile_page.ui.stats.curr_year_travels')}</span>
          <span>{currYearTravels}</span>
        </li>
        <li>
          <span>{t('common.profile_page.ui.stats.most_visited_country')}</span>
          <span>{mostVisitedCountry}</span>
        </li>
      </ul>
    </S.Wrapper>
  );
};

export default Statistics;
