import styles from "./index.module.css";
import ReactApexChart from 'react-apexcharts';
import { useEffect, useState } from "react";

const Graph = () => {
  const [graph, setGraph] = useState({
    series: [{
      name: "Temperature",
      data: []
    }],
    options: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: 'Temperature. Precipitation. Wind',
        align: 'left'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5
        },
      },
      xaxis: {
        categories: [],
      }
    },
  });

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1f7bd4f4e3msh3c31ac7982f7943p18e134jsn6638a7d18803',
      'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
    }
  };

  const getData = () => {
    fetch(
      "https://open-weather13.p.rapidapi.com/city/fivedaysforcast/30.438/-89.1028", options
    )
      .then((response) => response.json())
      .then((res) => {
        const newData = res.list.map(item => item.main.temp); // Replace 'main.temp' with the actual property in your response
        setGraph((prevState) => ({
          series: [{
            name: "Temperature",
            data: newData,
          }],
          options: {
            ...prevState.options,
            xaxis: {
              categories: res.list.map(item => item.dt_txt), // Replace 'dt_txt' with the actual property in your response
            },
          }
        }));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className={styles.Maingraph}>
        <div id="chart">
          <ReactApexChart options={graph.options} series={graph.series} type="line" height={350} />
        </div>
      </div>
    </>
  );
}

export default Graph;
