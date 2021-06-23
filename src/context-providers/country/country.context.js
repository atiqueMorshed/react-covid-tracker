import { createContext, useState, useEffect } from "react";

export const CountryContext = createContext({
  countries: [],
  selectedCountry: null,
  selectCountry: () => {},
});

const CountryProvider = ({ children }) => {
  const [countries, setCountries] = useState();
  const [country, setCountry] = useState("worldwide");

  const selectCountry = (event) => {
    console.log("Setting country in CountryProvider!");
    setCountry(event.target.value);
  };

  useEffect(() => {
    const getCountriesData = async () => {
      const response = await fetch("https://disease.sh/v3/covid-19/countries");
      console.log("Fetching countries!");
      const data = await response.json();
      const countries = data.map((cnt) => ({
        country: cnt.country,
        value: cnt.countryInfo.iso2,
      }));
      setCountries(countries);
    };
    getCountriesData();
  }, []);

  return (
    <CountryContext.Provider
      value={{
        countries,
        country,
        selectCountry,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export default CountryProvider;
