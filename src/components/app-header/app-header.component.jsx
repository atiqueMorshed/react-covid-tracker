import React, { useContext } from "react";

import { CountryContext } from "../../context-providers/country/country.context";

import { FormControl, Select, MenuItem } from "@material-ui/core";

import "./app-header.styles.scss";

const AppHeader = () => {
  const { countries, country, selectCountry } = useContext(CountryContext);

  console.log("Rendering AppHeader");
  return (
    <div className="app">
      <div className="app__header">
        <h1>Covid-19 Tracker</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value={country} onChange={selectCountry}>
            <MenuItem value="worldwide">Worldwide</MenuItem>
            {countries
              ? countries.map((cnt) => (
                  <MenuItem value={cnt.value}>{cnt.country}</MenuItem>
                ))
              : null}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default React.memo(AppHeader);
