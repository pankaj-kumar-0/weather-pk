import React, { useEffect, useState } from "react";
import Wed from "./Wed";
import "../App.css";

export default function Temp() {
  const [sec_value, set_sec_value] = useState("moradabad");
  const [temp_info, set_temp_info] = useState({});

  const get_wed_info = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${sec_value}&units=metric&appid=a09955e6461083dafd4aef43cc6de034`;

      let resp = await fetch(url);
      let data = await resp.json();

      const { temp, pressure, humidity } = data.main;
      const { main: w_con } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset, sunrise } = data.sys;

      const all_wed_info = {
        temp,
        pressure,
        humidity,
        w_con,
        name,
        speed,
        country,
        sunset,
        sunrise,
      };
      set_temp_info(all_wed_info);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    get_wed_info();
  }, []);

  return (
    <>
      <div className="search_box">
        <input
          className="search_bar"
          type="search"
          placeholder="Enter city name"
          id="search"
          value={sec_value}
          onChange={(item) => set_sec_value(item.target.value)}
        />
        <button className="search_btn" type="button" onClick={get_wed_info}>
          Search
        </button>
      </div>
      <Wed temp_info={temp_info} />
    </>
  );
}
