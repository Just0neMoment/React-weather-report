import React, { useEffect, useState } from "react";
import Select from "react-select";

import weatherDescKo from "../weatherDescKo.js";
import country from "../country.js";

import axios from "axios";

import Loading from "../modal/Loading.js";

import "./card.modules.css";

function Card() {

  const apiKey = process.env.REACT_APP_API_KEY;

  let [loadingModal, setLoadingModal] = useState(true);
  let [weatherInfo, setWeatherInfo] = useState(null);
  let [selectedLocation, setSelectedLocation] = useState({
    value: "서울",
    label: "서울",
    lat: 37.5665,
    lon: 126.978,
  });

  useEffect(() => {
    fetchWeatherData(selectedLocation.lat, selectedLocation.lon);
  }, [selectedLocation]);

  let fetchWeatherData = (lat, lon) => {
    setLoadingModal(true);

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
      )
      .then((result) => {
        let weatherID = result.data.weather[0].id;
        let currentTemp = (result.data.main.temp - 273.15).toFixed(0);
        let tempMax = (result.data.main.temp_max - 273.15).toFixed(0);
        let tempMin = (result.data.main.temp_min - 273.15).toFixed(0);
        let description = getWeatherDescription(weatherID);

        setWeatherInfo({
          description: description,
          currentTemp: currentTemp,
          tempMax: tempMax,
          tempMin: tempMin,
        });
        setLoadingModal(false);
      })
      .catch(() => {
        alert("데이터 요청 실패");
        setLoadingModal(false);
      });
  };

  let getWeatherDescription = (code) => {
    let descriptionObject = weatherDescKo.find((obj) =>
      obj.hasOwnProperty(code)
    );
    return descriptionObject
      ? descriptionObject[code]
      : "날씨 정보를 찾을 수 없습니다.";
  };

  let handleCityChange = (selectedOption) => {
    setSelectedLocation(selectedOption);
  };

  let options = country.map((city) => ({
    value: city.city,
    label: city.city,
    lat: city.lat,
    lon: city.lon,
  }));

  const customStyles = {
    menu: (provided) => ({
      ...provided,
      color: "#000000",
    }),
  };

  return (
    <div className="weather">
      <div className="weather-head">
        <h2>날씨 정보</h2> {loadingModal === true ? <Loading /> : null}
      </div>
      <Select
        value={selectedLocation}
        onChange={handleCityChange}
        options={options}
        isSearchable={true}
        placeholder="도시를 선택하세요"
        styles={customStyles}
      />
      {weatherInfo && (
        <>
          <p>{weatherInfo.currentTemp}º</p>
          <p>{weatherInfo.description}</p>
          <div className="temperature">
            <p>최고 : {weatherInfo.tempMax}º</p>
            <p>최저 : {weatherInfo.tempMin}º</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
