import React from "react";
import { Switch, Route } from "react-router-dom";

export default (
  <Switch>
    <Route exact path="/"/>
    <Route path="*" render={() => <img src="https://cdn-images-1.medium.com/max/1600/1*qdFdhbR00beEaIKDI_WDCw.gif" alt ='404 ERROR - PAGE NOT FOUND'/>} />
  </Switch>
);
