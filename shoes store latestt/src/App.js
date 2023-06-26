import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/home';
import Cart from './pages/Cart';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
}
export default App;
