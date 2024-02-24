import { useState } from "react";
import NavBar from "./components/03_big/navbar";
import Card from "./components/03_big/card";
import BigCard from "./components/02_medium/bigCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div style={{overflow:"hidden"}}>
      <div
        style={{
          width: "100vw",
          height: "10vh",
          backgroundColor: "rgb(247 243 240)",
        }}
      ></div>
      <div style={{ backgroundColor: "#f6f8fb" }}>
        <NavBar />
        <Card />
        <BigCard />
      </div>
      <div
        style={{
          width: "100vw",
          height: "10vh",
          backgroundColor: "rgb(247 243 240)",
        }}
      ></div>
      </div>
    </>
  );
}

export default App;
