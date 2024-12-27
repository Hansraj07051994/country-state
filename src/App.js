import React, { useState } from "react";

const CountryStateSelector = () => {
  // Define country and state data
  const countryStateMap = {
    USA: ["California", "Texas", "New York", "Florida"],
    Canada: ["Ontario", "Quebec", "British Columbia", "Alberta"],
    India: ["Delhi", "Maharashtra", "Karnataka", "Tamil Nadu"],
  };

  const [selectedCountry, setSelectedCountry] = useState(""); // Selected country
  const [stateList, setStateList] = useState([]); // States based on the selected country

  // Handle country selection
  const handleCountryChange = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);

    // Update the state list based on the selected country
    setStateList(countryStateMap[country] || []);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Country and State Selector</h2>

      <div style={{ marginBottom: "15px" }}>
        <label htmlFor="country" style={{ marginRight: "10px" }}>
          Select Country:
        </label>
        <select
          id="country"
          value={selectedCountry}
          onChange={handleCountryChange}
          style={{ padding: "5px", minWidth: "200px" }}
        >
          <option value="">-- Select a Country --</option>
          {Object.keys(countryStateMap).map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="state" style={{ marginRight: "10px" }}>
          Select State:
        </label>
        <select
          id="state"
          disabled={!selectedCountry}
          style={{ padding: "5px", minWidth: "200px" }}
        >
          <option value="">-- Select a State --</option>
          {stateList.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CountryStateSelector;
