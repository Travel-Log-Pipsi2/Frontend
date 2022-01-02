/* eslint-disable indent */
import { Marker } from 'react-map-gl';
import styled from 'styled-components';

const StyledMarker = styled(Marker)<{ color: string }>`
  width: 40px;

  svg {
    cursor: pointer;

    path {
      fill: ${(props) =>
        props.color === 'blue' && props.theme.colors.primary[500]};
      fill: ${(props) =>
        props.color === 'purple' && props.theme.colors.primary[300]};
    }
  }
`;

export { StyledMarker };
