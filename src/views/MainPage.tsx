import React from 'react';
import { toast } from 'react-toastify';

const MainPage = (): JSX.Element => {
  const notify = () => toast.error('SO EASY');
  return (
    <div>
      <button onClick={notify}>asd</button>
    </div>
  );
};

export default MainPage;
