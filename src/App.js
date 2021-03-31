import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { Home, Quiz } from './pages'

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/quiz" component={Quiz}></Route>
      </Switch>
    </>
  );
}

export default App;
