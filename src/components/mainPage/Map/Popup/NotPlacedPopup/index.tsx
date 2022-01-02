import { routes } from 'constants/routes';
import AddTravelContext from 'context/addTravel';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import * as S from './styles';

interface Props {
  marker: {
    latitude: number;
    longitude: number;
    name: string;
    text: string;
  };
  closePopup: () => void;
}

const NotPlacedPopup = ({ marker, closePopup }: Props) => {
  const history = useHistory();
  const { initAdd } = useContext(AddTravelContext);
  const { t } = useTranslation('common');

  const handleClick = () => {
    closePopup();
    initAdd({
      name: marker.name,
      latitude: marker.latitude,
      longitude: marker.longitude,
      text: marker.text,
    });
    history.push(routes.addTravel);
  };

  return (
    <S.StyledPopup
      latitude={marker.latitude}
      longitude={marker.longitude}
      onClose={closePopup}
      closeButton
      closeOnClick={false}
      offsetTop={0}
      offsetLeft={20}
    >
      <h3>{marker.text}</h3>
      <h4>{marker.name.split(', ').slice(-1)[0]}</h4>
      <S.Button type="button" onClick={handleClick}>
        {t('common.map.markers.add_new.button')}
      </S.Button>
    </S.StyledPopup>
  );
};

export default NotPlacedPopup;
