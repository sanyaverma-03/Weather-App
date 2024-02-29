import styles from "./index.module.css";
import ReactApexChart from "react-apexcharts";
import { useEffect, useState } from "react";
import moment from "moment";

const Graph = () => {
  const [res1, setRes] = useState([]);
  const [graph, setGraph] = useState({
    series: [
      {
        name: "Temperature",
        data: [],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Temperature. Precipitation. Wind",
        align: "left",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [],
      },
    },
  });

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "8902c51255mshb90ccfe695a8544p148f32jsn5ade4e0d6fc6",
      "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
    },
  };

  const getData = () => {
    fetch(
      "https://open-weather13.p.rapidapi.com/city/fivedaysforcast/30.438/-89.1028",
      options
    )
      .then((response) => response.json())
      .then((res) => {
        setRes(res.list.slice(0, 20));
        const newData = res.list.slice(0, 20).map((item) => item.main.temp);
        setGraph((prevState) => ({
          series: [
            {
              name: "Temperature",
              data: newData,
            },
          ],
          options: {
            ...prevState.options,
            xaxis: {
              categories: res.list.map((item) =>
                moment(item.dt_txt).format("LT")
              ),
            },
          },
        }));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(res1);
  return (
    <>
      <div className={styles.Maingraph}>
        <div id="chart">
          <ReactApexChart
            options={graph.options}
            series={graph.series}
            type="line"
            height={350}
          />
        </div>
      </div>
    </>
  );
};

export default Graph;
