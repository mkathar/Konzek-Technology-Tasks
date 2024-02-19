import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const ListComponent = () => {
  const [selectedCountries, setSelectedCountries] = useState([]);
  const countries = useSelector((state) => state.Countries.countries);

  useEffect(() => {
    if (countries) {
      automaticSelection();
    }
  }, [countries]);

  const toggleSelection = (index) => {
    const selectedIndex = selectedCountries.indexOf(index);
    if (selectedIndex !== -1) {
      setSelectedCountries(selectedCountries.filter((i) => i !== index));
    } else {
      setSelectedCountries([index]);
    }
  };

  const isSelected = (index) => {
    return selectedCountries.includes(index);
  };

  const randomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  const automaticSelection = () => {
    setSelectedCountries([]);
    if (countries.length > 10) {
      setSelectedCountries([9]);
    } else if (countries.length > 0) {
      setSelectedCountries([countries.length - 1]);
    }
  };

  return (
    <div className="list">
      {countries ? (
        <div className="list__group">
          {countries.map((country, index) => (
            <div
              className="list__group__box"
              key={index}
              onClick={() => toggleSelection(index)}
              style={{
                backgroundColor: isSelected(index) ? randomColor() : "",
              }}
            >
              <h1 className="list__group__box__emoji">{country.emoji}</h1>
              <h3 className="list__group__box__name">{country.name}</h3>
              <p className="list__group__box__capital">{country.capital}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ListComponent;
