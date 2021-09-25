import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ROUTES from 'constants/routes';

import { MainPage } from 'pages';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path={ROUTES.MAIN_PAGE} component={MainPage} />
    </Switch>
  </BrowserRouter>
);

export default Router;
