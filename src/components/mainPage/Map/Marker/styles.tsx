import { Marker } from 'react-map-gl';
import styled from 'styled-components';

const StyledMarker = styled(Marker)`
  width: 40px;
  border: 1px solid red;

  svg {
    cursor: pointer;
    filter: drop-shadow(0 0 2px green);

    path {
      fill: green;
    }
  }
`;

export { StyledMarker };