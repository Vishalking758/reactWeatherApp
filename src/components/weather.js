import React, { useEffect, useState } from "react";

export default function Weather() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("delhi");
  const [visibility, setVisibility] = useState(null);
  const [wind, setWind] = useState(null);
  const [atmos, setAtmos] = useState(null);
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=e045b569dd462141d2cf6cc28e88c106`;
      const response = await fetch(url);
      const resjsn = await response.json(url);
      setCity(resjsn.main);
      setVisibility(resjsn.visibility);
      setWind(resjsn.wind);
      setAtmos(resjsn.weather[0].description);
      setCountry(resjsn.sys);
    };
    fetchApi();
  }, [search]);

  return (
    <>
      <div className="container-fluid p-3 d-flex justify-content-center align-items-center vh-100  background-img">
        <div className=" w-75 vh-75 rounded shadow-lg">
          <div className="vh-25 border rounded border-white d-flex flex-column justify-content-around">
            <div className="col-12 h3 text-center border-bottom border-white rounded text-light p-2">
              React Weather App
            </div>
            <input
              className="form-control bg-transparent place text-light border-white w-75 text-center m-auto mb-2"
              type="search"
              style={{ textTransform: "uppercase" }}
              placeholder="Type City Name Here"
              aria-label="Search"
              htmlvalue={city}
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
          </div>

          <div className="vh-75 row border rounded border-white p-0 m-0">
            {!city ? (
              <>
                <div className="col-md-6  text-white">
                  <h3
                    className="card-subtitle my-4 ps-3 text-center"
                    style={{ textTransform: "uppercase" }}
                  >
                    City not found
                  </h3>

                  <div className="bg-transparent card border-0">
                    <div class="card-body text-center">
                      <h5 class="card-title"> Country </h5>
                      <p class="card-text">No Data</p>
                    </div>
                  </div>
                  <div className="bg-transparent card border-0">
                    <div class="card-body text-center">
                      <h5 class="card-title"> Temp </h5>
                      <p class="card-text">No Data</p>
                    </div>
                  </div>

                  <div className="bg-transparent card border-0">
                    <div class="card-body text-center">
                      <h5 class="card-title"> Max,Min</h5>
                      <p class="card-text">No Data</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 border rounded border-white text-white">
                  <div className="bg-transparent card border-0">
                    <div class="card-body text-center">
                      <h5 class="card-title"> Humidit </h5>
                      <p class="card-text">No Data</p>
                    </div>
                  </div>
                  <div className="bg-transparent card border-0">
                    <div class="card-body text-center">
                      <h5 class="card-title"> Wind Speed </h5>
                      <p class="card-text">No Data</p>
                    </div>
                  </div>

                  <div className="bg-transparent card border-0">
                    <div class="card-body text-center">
                      <h5 class="card-title"> Atmosphere</h5>
                      <p class="card-text">No Data</p>
                    </div>
                  </div>
                  <div className="bg-transparent card border-0">
                    <div class="card-body text-center">
                      <h5 class="card-title">Visibility</h5>
                      <p class="card-text">No Data</p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="col-md-6 text-white">
                  <h3
                    className="card-subtitle my-4 ps-3 text-center"
                    style={{ textTransform: "uppercase" }}
                  >
                    {search}
                  </h3>

                  <div className="bg-transparent card border-0">
                    <div class="card-body text-center">
                      <h5 class="card-title"> Country </h5>
                      <p class="card-text">{country.country}</p>
                    </div>
                  </div>
                  <div className="bg-transparent card border-0">
                    <div class="card-body text-center">
                      <h5 class="card-title"> Temp </h5>
                      <p class="card-text">{city.temp}°C</p>
                    </div>
                  </div>

                  <div className="bg-transparent card border-0">
                    <div class="card-body text-center">
                      <h5 class="card-title"> Max,Min</h5>
                      <p class="card-text">
                        {" "}
                        Max: {city.temp_max}°C, Min: {city.temp_min}°C
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6  text-white">
                  <div className="bg-transparent card border-0">
                    <div class="card-body text-center">
                      <h5 class="card-title"> Humidit </h5>
                      <p class="card-text">{city.humidity}</p>
                    </div>
                  </div>
                  <div className="bg-transparent card border-0">
                    <div class="card-body text-center">
                      <h5 class="card-title"> Wind Speed </h5>
                      <p class="card-text">{wind.speed}</p>
                    </div>
                  </div>

                  <div className="bg-transparent card border-0">
                    <div class="card-body text-center">
                      <h5 class="card-title"> Atmosphere</h5>
                      <p class="card-text">{atmos}</p>
                    </div>
                  </div>
                  <div className="bg-transparent card border-0">
                    <div class="card-body text-center">
                      <h5 class="card-title">Visibility</h5>
                      <p class="card-text">{visibility}</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
