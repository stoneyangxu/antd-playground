import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';

import IndexPage from './routes/IndexPage';
import MainLayout from './components/MainLayout/MainLayout';

function RouterConfig({ history, app }) {
  const Todos = dynamic({
    app,
    models: () => [
      import('./models/todo'),
    ],
    component: () => import('./routes/Todos'),
  });

  return (
    <Router history={history}>
      <MainLayout>
        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/todos" exact component={Todos} />
        </Switch>
      </MainLayout>
    </Router>
  );
}

export default RouterConfig;
