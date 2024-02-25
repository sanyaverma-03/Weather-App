import { useState, useEffect } from "react";
import NavBar from "./components/03_big/navbar";
import Card from "./components/03_big/card";
import BigCard from "./components/02_medium/bigCard";

function App() {
  const [state, setState] = useState("London");
  const [weatherData, setWeatherData] = useState([]);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "fb52dd69b2msh91a2d291a897d3ap159c48jsn00472c007fb6",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };
  const getData = () => {
    fetch(
      "https://weatherapi-com.p.rapidapi.com/current.json?q=" + state,
      options
    )
      .then((response) => response.json())
      .then((res) => {
        setWeatherData(res);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);
  if (weatherData.length === 0) {
    return <h1>Loading....</h1>;
  }
  return (
    <>
      <div style={{ backgroundColor: "#f6f8fb" }}>
        <NavBar />
        <Card />
        <BigCard data={weatherData} />
      </div>
    </>
  );
}

export default App;
