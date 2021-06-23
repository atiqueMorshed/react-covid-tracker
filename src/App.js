import React from "react";

import AppHeader from "./components/app-header/app-header.component";
import InfoBoxCollection from "./components/info-box-collection/info-box-collection.component";
import Map from "./components/map/map.component";
import LiveCasesByCountry from "./components/live-cases-by-country/live-cases-by-country.component";
import WorldWideNewCases from "./components/worldwide-new-cases/worldwide-new-cases.component";

import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <div className="app__appHeader">
        <AppHeader />
      </div>
      <div className="app__infoBoxCollection">
        <InfoBoxCollection className="app__infoBoxCollection" />
      </div>
      <div className="app__map">
        <Map />
      </div>
      <div className="app__liveCasesByCountry">
        <LiveCasesByCountry />
      </div>
      <div className="app__worldWideNewCases">
        <WorldWideNewCases />
      </div>
    </div>
  );
};

export default App;
