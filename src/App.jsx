import { useEffect, useState } from "react";
import QuoteBox from "./QuoteBox";
import "./index.css";

function App() {
  const [bgColor, setBgColor] = useState("#342224");

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
  }, [bgColor]);

  return (
    <div
      style={{
        backgroundColor: bgColor,
        // transition: "background-color 1s ease",
        // minHeight: "100vh",
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <QuoteBox setBgColor={setBgColor} />
    </div>
  );
}

export default App
