import "./App.css";
import Stopwatch from "./components/Stopwatch";
import Timer from "./components/Timer";

import { useState } from "react";

function App() {

  const [show, setShow] = useState("showtimer")

  return (
    <div className="box">

      <div className="header">
      <div onClick={() => setShow("showtimer")} className={show == "showtimer" ? "head" : "heading1"}>
      
        <p>Timer</p>
      </div>

      <div onClick={() => setShow("showstopwatch")} className={show == "showstopwatch" ? "head2" : "heading2"}>
 
        <p>StopWatch</p>
      </div>

      </div>

      <div className="App">
        <div className="timer" hidden={show == "showtimer" ? false : true}>
          <Timer />
        </div>

        <div className="timer" hidden={show == "showstopwatch" ? false : true}>
          <Stopwatch />
        </div>
      </div>
    </div>
  );
}

export default App;
