import React, { useState } from 'react';

import { useTranslation } from 'react-i18next';
import getFullDate from 'utils/functions/getFullDate';
import useAuth from 'utils/hooks/useAuth';
import * as S from './styles';

const TravelsList = (): JSX.Element => {
  console.log('e');
  const { user } = useAuth();
  const { t } = useTranslation('common');
  const [places] = useState(user.places);

  console.log(places);

  return (
    <S.Wrapper>
      <h2>{t('common.travels.ui.title')}</h2>

      {places.map(({ name, country, travels }) => (
        <S.Places>
          <h3>{name}</h3>
          <h4>{country}</h4>

          <S.Travels>
            {travels.map(({ desc, endDate, startDate }) => (
              <S.Travel>
                <button type="button">Usuń</button>
                <span>
                  {`${getFullDate(startDate)} - ${getFullDate(endDate)}`}
                </span>
                <p>{desc}</p>
              </S.Travel>
            ))}
          </S.Travels>
        </S.Places>
      ))}
    </S.Wrapper>
  );
};

export default TravelsList;
