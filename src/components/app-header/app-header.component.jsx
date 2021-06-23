import React, { useContext } from "react";

import { CountryContext } from "../../context-providers/country/country.context";

import { FormControl, Select, MenuItem } from "@material-ui/core";

import "./app-header.styles.scss";

const AppHeader = () => {
  const { countries, selectedCountry, selectCountry } =
    useContext(CountryContext);

  if (selectedCountry) {
    return (
      <div className="appHeader">
        {console.log("Rendering AppHeader", selectedCountry)}
        <h1>Covid-19 Tracker</h1>
        <FormControl className="appHeader__dropdown">
          <Select
            variant="outlined"
            value={selectedCountry}
            onChange={selectCountry}
          >
            <MenuItem value="worldwide">Worldwide</MenuItem>
            {countries
              ? countries.map((cnt) => (
                  <MenuItem value={cnt.value}>{cnt.country}</MenuItem>
                ))
              : null}
          </Select>
        </FormControl>
      </div>
    );
  } else {
    return <p>Loading...</p>;
  }
};

export default React.memo(AppHeader);
