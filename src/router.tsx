import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ROUTES from 'constants/routes';

import { Header } from 'components';

import { MainPage } from 'pages';

const Router = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path={ROUTES.SCHEDULE} component={MainPage} />
      <Route path={ROUTES.CONTENT} component={MainPage} />
      <Route path={ROUTES.GROW} component={MainPage} />
      <Route path={ROUTES.REPORT} component={MainPage} />
      <Route path={ROUTES.MAIN_PAGE} component={MainPage} />
    </Switch>
  </BrowserRouter>
);

export default Router;
