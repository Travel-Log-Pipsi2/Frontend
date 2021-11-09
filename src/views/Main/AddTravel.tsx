import { AddTravelForm } from 'components';
import AddTravelContext from 'context/addTravel';
import { useContext, useEffect } from 'react';

const AddTravel = (): JSX.Element => {
  const { initAdd } = useContext(AddTravelContext);

  useEffect(() => {
    console.log('Add payment component init');
  }, []);

  return (
    <section>
      <AddTravelForm />
    </section>
  );
};

export default AddTravel;
