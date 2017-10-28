import React from 'react';
import DOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home.js';
import Notfound from './components/Notfound.js';

DOM.render(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={()=>(<Home/>)} />
        <Route path="/" component={()=>(<Notfound/>)} />
      </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);
