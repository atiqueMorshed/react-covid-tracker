import React, { useContext } from "react";

import { CountryContext } from "../../context-providers/country/country.context";

import InfoBox from "../info-box/info-box.component";

import "./info-box-collection.styles.scss";

const InfoBoxCollection = () => {
  const {
    countryInfo: {
      cases,
      todayCases,
      deaths,
      todayDeaths,
      recovered,
      todayRecovered,
    },
  } = useContext(CountryContext);
  return (
    <div className="infoBoxContainer">
      {console.log("rendering infoBoxCollection. cases: ", cases)}
      <InfoBox title="COVID-19 Cases" cases={todayCases} total={cases} />
      <InfoBox title="Recovered" cases={todayRecovered} total={recovered} />
      <InfoBox title="Deaths" cases={todayDeaths} total={deaths} />
    </div>
  );
};

export default InfoBoxCollection;
