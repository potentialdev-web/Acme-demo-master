import React, {
  Suspense,
  lazy
} from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import LoadingScreen from './components/LoadingScreen';

export const renderRoutes = (routes = []) => (
  <Suspense fallback={<LoadingScreen />}>
    <Switch>
      {routes.map((route, i) => {
        const Component = route.component;

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={(props) => (
              <MainLayout>
                <Component {...props} />
              </MainLayout>
            )}
          />
        );
      })}
    </Switch>
  </Suspense>
);

const routes = [
  {
    exact: true,
    path: '/',
    component: lazy(() => import('./views/IndexView'))
  },
  {
    exact: true,
    path: '/conversation/:id/view',
    component: lazy(() => import('./views/MainView'))
  },
];

export default routes;
