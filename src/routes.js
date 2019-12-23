import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Faq from './pages/Faq';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Faq} />
    </Switch>
  );
}
