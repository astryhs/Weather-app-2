import { getGeoData } from "../API/geoData.js";
import { showRecentCities } from "./showRecenrCities.js";
import { recentCitiesList } from "./showRecenrCities.js";

const searchForm = document.querySelector(".search-form");
export const cityInput = document.querySelector(".city-input");

export function getWeatherByForm() {
  searchForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    getGeoData(cityInput);
    recentCitiesList.style.display = "none";
    cityInput.value = "";
  });

  cityInput.addEventListener("focus", () => {
    showRecentCities();
  });
}
