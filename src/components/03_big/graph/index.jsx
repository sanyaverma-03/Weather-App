import styles from "./index.module.css";
import ReactApexChart from "react-apexcharts";
import { useEffect, useState } from "react";
import moment from "moment";

const Graph = ({ longitude, latitude }) => {
  const [res1, setRes] = useState([]);
  const startDate = moment(res1[0]?.dt_txt).format("ll");
  const endDate = moment(res1[19]?.dt_txt).format("ll");

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
        text: "Next 3 days forecast",
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
      "X-RapidAPI-Key": "e93b0223c9mshd98d651a954d049p1f82e3jsn1e57bef7d62e",
      "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
    },
  };

  const getData = () => {
    fetch(
      `https://open-weather13.p.rapidapi.com/city/fivedaysforcast/${latitude}/${longitude}`,
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
  }, [latitude, longitude]);

  if (res1.length === 0) {
    return <h1>Loading....</h1>;
  }
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
