import MarkerSVG from 'static/icons/marker';
import * as S from './styles';

interface Props {
  longitude: number;
  latitude: number;
  onClick: () => void;
}

const index = ({ longitude, latitude, onClick }: Props) => (
  <S.StyledMarker longitude={longitude} latitude={latitude} onClick={onClick}>
    <MarkerSVG />
  </S.StyledMarker>
);

export default index;
