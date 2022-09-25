import React from 'react';
import Stocks from './pages/Stocks';
import About from './pages/About';
import Home from './pages/Home';
import StockShow from "./pages/StockShow"
import Nav from "./components/Nav"
import { withRouter } from 'react-router';
import { Route, Switch } from "react-router-dom";

function App(props) {
  return (
    <div>
      <Nav/>
      <Switch>
        <Route exact path ="/">
          < Home/>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/stocks/:symbol"
          render={(routerProps) => <StockShow {...routerProps} />}
          />  
          <Route path="/stocks">
          < Stocks/> 
      </Route>
      </Switch>
    </div>
  );
}

export default App;
// export default withRouter(App)
