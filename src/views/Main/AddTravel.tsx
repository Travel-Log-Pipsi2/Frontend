import { AddTravelForm } from 'components';
import { useEffect } from 'react';
import styled from 'styled-components';

const SectionStyled = styled.div`
  /* position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  border: 1px solid red;
  background-color: ${(props) => props.theme.colors.white};
  width: 520px; */
`;

const AddTravel = (): JSX.Element => {
  useEffect(() => {
    console.log('Add travel component init');
  }, []);

  return (
    <SectionStyled>
      <AddTravelForm />
    </SectionStyled>
  );
};

export default AddTravel;
