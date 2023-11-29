import React, { useState } from "react";
import { City, Country } from "country-state-city";
import Picker from "./picker";
import { useRouter } from "next/navigation";

const options = Country.getAllCountries().map((country) => ({
  value: {
    latitude: country.latitude,
    longitude: country.longitude,
    isoCode: country.isoCode,
  },
  label: country.name,
}));

const getCitiesForCountry = (countryIsoCode) => {
  const cities = City.getCitiesOfCountry(countryIsoCode);
  if (!cities) {
    return [];
  }

  return cities.map((city) => ({
    value: {
      latitude: city.latitude,
      longitude: city.longitude,
      countryCode: city.countryCode,
      name: city.name,
      stateCode: city.stateCode,
    },
    label: city.name,
  }));
};

export default function CityPicker() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const router = useRouter();

  const handleSelectedCountry = (option) => {
    setSelectedCountry(option);
    setSelectedCity(null);
  };

  const handleSelectedCity = (option) => {
    setSelectedCity(option);
    router.push(
      `/location/${option?.value.name}/${option?.value.latitude}/${option?.value.longitude}`
    );
  };

  const cityOptions = selectedCountry
    ? getCitiesForCountry(selectedCountry.value.isoCode)
    : [];

  return (
    <div className="space-y-4">
      <Picker
        id={"countryPicker"}
        text={"Country"}
        options={options}
        value={selectedCountry}
        onChange={handleSelectedCountry}
        placeholder={"Select a Country..."}
      />
      {selectedCountry && (
        <Picker
          id={"cityPicker"}
          text={"City"}
          options={cityOptions}
          value={selectedCity}
          onChange={handleSelectedCity}
          placeholder={"Select a City..."}
        />
      )}
    </div>
  );
}
