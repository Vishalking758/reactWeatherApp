import React, { useEffect, useState } from 'react'


export default function Weather() {
 const [city, setCity] = useState(null);
 const [search, setSearch] = useState("delhi");
 useEffect( ()=>{
const fetchApi = async() =>{
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=e045b569dd462141d2cf6cc28e88c106`;
  const response = await fetch(url);
  const resjsn = await response.json(url);
  setCity(resjsn.main);
};
fetchApi();
 },[search]);

  return (
    <div className="container">
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div
            className="card border-success mb-3 vh-50"
            style={{ width: "18rem" }}
          >
            <div className="card-header">Weather</div>
            <div className="card-body">
              <h5 className="card-title">Search City</h5>
              <input
                className="form-control border-success"
                type="search"
                placeholder=""
                aria-label="Search"
                htmlvalue={city}
                onChange={(event) =>{setSearch(event.target.value)

                }}
              />
              {!city ?(
                <div>
                <h6 className="card-subtitle my-4">City not found</h6>
              <h6 className="card-subtitle my-4">Search valid city</h6>
             
              </div>
              ) :( 
              <div>
                <h6 className="card-subtitle my-4">{search}</h6>
              <h6 className="card-subtitle my-4">{city.temp}°C</h6>
              <h6 className="card-subtitle mt-2">Max: {city.temp_max}°C, Min: {city.temp_min}°C</h6>
              </div>
              )}
             
            </div>
          
          </div>
        </div>


    
      </div>
  )
}
