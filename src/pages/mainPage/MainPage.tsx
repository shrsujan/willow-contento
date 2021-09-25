import React from 'react';

import { BodyLayout } from 'layouts';
import { Sidebar } from 'modules/mainPage';

const MainPage: React.FC<{}> = () => {
  return (
    <BodyLayout>
      <Sidebar />
    </BodyLayout>
  );
};

export default MainPage;
