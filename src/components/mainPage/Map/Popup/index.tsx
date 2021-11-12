import { routes } from 'constants/routes';
import AddTravelContext from 'context/addTravel';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './styles';

interface Props {
  marker: {
    latitude: number;
    longitude: number;
    name: string;
  };
  closePopup: () => void;
}

const NotPlacedPopup = ({ marker, closePopup }: Props) => {
  const history = useHistory();
  const { initAdd } = useContext(AddTravelContext);

  const handleClick = () => {
    closePopup();
    initAdd({
      name: marker.name,
      latitude: marker.latitude,
      longitude: marker.longitude,
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
      <p>{marker.name}</p>
      <S.Button type="button" onClick={handleClick}>
        Dodaj lokację
      </S.Button>
    </S.StyledPopup>
  );
};

export default NotPlacedPopup;
