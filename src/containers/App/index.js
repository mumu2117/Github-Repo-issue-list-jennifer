import React from 'react';
import {BrowserRouter, Switch} from "react-router-dom";
import NotfoundPage from "../NotfoundPage";
import AppRoute from "./AppRoute";
import RepositoryPage from "../RepositoryPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <AppRoute exact path="/:owner?/:name?" component={RepositoryPage}/>
        <AppRoute component={NotfoundPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
