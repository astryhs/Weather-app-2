import { capitalizeCity } from "./capitalizedCity.js";

export const saveCityToLocalStorage = (city) => {
  const capitalizedCity = capitalizeCity(city);

  let cities = JSON.parse(localStorage.getItem("recentCities")) || [];

  if (!cities.includes(capitalizeCity)) {
    cities.unshift(capitalizedCity);
    if (cities.length > 5) {
      cities.pop();
    }
    localStorage.setItem("recentCities", JSON.stringify(cities));
  }
};
