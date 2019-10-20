import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import routes from "./routes";
import Menu from "./components/Menu/Menu";

class App extends React.Component {
  showContentMenus = routes => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          ></Route>
        );
      });
    }
    return <Switch>{result}</Switch>;
  };

  render() {
    return (
      <Router>
        <Menu></Menu>
        <div className="row">{this.showContentMenus(routes)}</div>
      </Router>
    );
  }
}

export default App;
