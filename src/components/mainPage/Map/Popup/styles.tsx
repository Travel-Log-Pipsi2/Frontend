import { StyledGhostButton } from 'components/shared';
import { Popup } from 'react-map-gl';
import styled from 'styled-components';

const StyledPopup = styled(Popup)`
  .mapboxgl-popup-content {
    border-radius: 8px;
    padding-inline: 24px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;

    p {
    }
  }
`;

const Button = styled(StyledGhostButton)``;

export { StyledPopup, Button };
