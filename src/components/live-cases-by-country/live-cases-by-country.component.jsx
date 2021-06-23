import React, { useContext } from "react";

import { CountryContext } from "../../context-providers/country/country.context";

import { Typography, Card, CardContent } from "@material-ui/core";

import "./live-cases-by-country.styles.scss";

const LiveCasesByCountry = () => {
  const { countriesInfo } = useContext(CountryContext);
  return (
    <div className="liveCasesByCountry">
      {console.log("fetching LiveCasesByCountry.")}
      <Card className="liveCasesByCountry__card">
        <CardContent className="liveCasesByCountry__card__content">
          <Typography variant="h4">Highest Cases</Typography>
          <div className="liveCasesByCountry__card__content__container">
            {countriesInfo.map(({ country, cases }) => (
              <div className="LiveCasesByCountry__card__content__container__single">
                <p>{country}</p>
                <p>{cases}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LiveCasesByCountry;
