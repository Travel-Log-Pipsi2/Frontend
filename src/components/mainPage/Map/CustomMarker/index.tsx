import MarkerSVG from 'static/icons/marker';
import * as S from './styles';

interface Props {
  longitude: number;
  latitude: number;
  onClick: () => void;
  color: string;
}

const CustomMarker = ({ longitude, latitude, onClick, color }: Props) => (
  <S.StyledMarker
    color={color}
    longitude={longitude}
    latitude={latitude}
    onClick={onClick}
  >
    <MarkerSVG />
  </S.StyledMarker>
);

export default CustomMarker;
