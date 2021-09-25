import React from 'react';

import { BodyLayout } from 'layouts';
import { Content, Sidebar } from 'modules/mainPage';

const MainPage: React.FC<{}> = () => {
  return (
    <BodyLayout>
      <Sidebar />
      <Content />
    </BodyLayout>
  );
};

export default MainPage;
