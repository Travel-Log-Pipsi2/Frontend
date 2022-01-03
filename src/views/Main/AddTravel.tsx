import { AddTravelForm } from 'components';
import { useEffect } from 'react';

const AddTravel = (): JSX.Element => {
  useEffect(() => {
    console.log('Add travel component init');
  }, []);

  return (
    <section>
      <AddTravelForm />
    </section>
  );
};

export default AddTravel;
