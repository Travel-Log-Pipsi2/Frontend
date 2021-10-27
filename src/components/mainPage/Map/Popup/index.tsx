import { routes } from 'constants/routes';
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
  console.log(marker);
  const history = useHistory();

  const handleClick = () => {
    closePopup();
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
