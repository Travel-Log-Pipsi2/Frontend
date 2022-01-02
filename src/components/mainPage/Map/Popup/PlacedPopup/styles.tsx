import { StyledGhostButton } from 'components/shared';
import { Popup } from 'react-map-gl';
import styled from 'styled-components';

const StyledPopup = styled(Popup)`
  z-index: 2;
  max-width: 300px;

  .mapboxgl-popup-content {
    border-radius: 8px;
    padding-inline: 24px;
    box-shadow: 4px 8px 8px rgba(0, 0, 0, 0.2);

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;

    h3 {
      text-align: center;
    }

    > div {
      border-top: 1px solid ${(props) => props.theme.colors.black};

      > h4 {
        font-size: 0.85rem;
      }

      > p {
        font-size: 0.9rem;
        color: #505050;
      }
    }
  }

  .mapboxgl-popup-close-button {
    width: 20px;
    height: 20px;
  }
`;

const Button = styled(StyledGhostButton)``;

export { StyledPopup, Button };
