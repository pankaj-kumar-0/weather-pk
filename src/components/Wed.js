import React, { useState, useEffect } from "react";
import "../App.css";

export default function Wed({ temp_info }) {
  const {
    temp,
    pressure,
    humidity,
    w_con,
    name,
    speed,
    country,
    sunrise,
    sunset
  } = temp_info;

  let sun_set_sec = sunset;
  let set_date = new Date(sun_set_sec * 1000);
  let set_time = `${set_date.getHours()}:${set_date.getMinutes()}`;

  let sun_rise_sec = sunrise;
  let rise_date = new Date(sun_rise_sec * 1000);
  let rise_time = `${rise_date.getHours()}:${rise_date.getMinutes()}`;

  const [weather_status, set_weather_status] = useState("");

  useEffect(() => {
    if (w_con) {
      switch (w_con) {
        case "Clouds":
          set_weather_status("wi-day-cloudy");
          break;
        case "Haze":
          set_weather_status("wi-day-haze");
          break;
        case "Clear":
          set_weather_status("wi-day-sunny");
          break;
        case "Mist":
          set_weather_status("wi-dust");
          break;
        case "Rain":
          set_weather_status("wi-rain");
          break;

        default:
          set_weather_status("wi-day-sunny");
          break;
      }
    }
  }, [w_con]);

  return (
    <>
      <div className="container">
        <div className="temp_col">
          <div className="temp_col_rows">
            <i className={`wi ${weather_status}`}></i>
          </div>
          <div className="temp_col_rows" id="temp_row">
            <div className="temp"> {temp}&deg;</div>
            <div className="loc">
              <div className="condition">{w_con}</div>
              <div className="location">
                {name},{country}{" "}
              </div>
            </div>
          </div>
          <div className="temp_col_rows">
            <div className="date">{new Date().toLocaleString()}</div>
          </div>
        </div>

        <div className="wed_col">
          <div className="wed_col_rows">
            <div className="icon_sp">
              <i className={"wi wi-horizon-alt"}></i>
            </div>
            <div className="extra_info">
              Sunrise {rise_time}
              <br />
              Sunset {set_time}
            </div>
          </div>
          <div className="wed_col_rows">
            <div className="icon_sp">
              <i className={"wi wi-sandstorm"}></i>
            </div>
            <div className="extra_info">
              {speed} m/s <br />
              Wind
            </div>
          </div>

          <div className="wed_col_rows">
            <div className="icon_sp">
              <i className={"wi wi-flood"}></i>
            </div>
            <div className="extra_info">
              {pressure} hpa
              <br />
              Pressure
            </div>
          </div>
          <div className="wed_col_rows">
            <div className="icon_sp">
              <i className={"wi wi-humidity"}></i>
            </div>
            <div className="extra_info">
              {humidity} %
              <br />
              Humidity
            </div>
          </div>

        </div>
      </div>

      <div className="circle1"></div>
      <div className="circle2"></div>
    </>
  );
}
