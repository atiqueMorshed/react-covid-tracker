import { createContext, useState, useEffect } from "react";

export const CountryContext = createContext({
  countries: [],
  selectedCountry: "worldwide",
  selectCountry: () => {},
  countryInfo: null,
});

const CountryProvider = ({ children }) => {
  const [countries, setCountries] = useState();
  const [selectedCountry, setSelectedCountry] = useState("worldwide");
  const [countriesInfo, setCountriesInfo] = useState([]);
  const [countryInfo, setCountryInfo] = useState({});

  const selectCountry = async (event) => {
    setSelectedCountry(event.target.value);
  };

  useEffect(() => {
    const getCountriesData = async () => {
      const response = await fetch("https://disease.sh/v3/covid-19/countries");
      console.log("CountryContext fetching countries!");
      const data = await response.json();
      const countries = data.map((cnt) => ({
        country: cnt.country,
        value: cnt.countryInfo.iso2,
      }));
      setSelectedCountry("worldwide");
      setCountries(countries);
      setCountriesInfo(data);
    };
    getCountriesData();
  }, []);

  useEffect(() => {
    console.log("CountryContext selected country: ", selectedCountry);
    const getInitialWorldwideData = async () => {
      const url =
        selectedCountry === "worldwide"
          ? "https://disease.sh/v3/covid-19/all"
          : `https://disease.sh/v3/covid-19/countries/${selectedCountry}?strict=true`;
      const response = await fetch(url);
      const data = await response.json();
      setCountryInfo(data);
    };
    getInitialWorldwideData();
  }, [selectedCountry]);

  return (
    <CountryContext.Provider
      value={{
        countries,
        selectedCountry,
        countryInfo,
        selectCountry,
        countriesInfo,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export default CountryProvider;
