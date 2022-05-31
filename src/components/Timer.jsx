import React, { useEffect, useRef, useState } from "react";
import Styles from "./Timer.module.css";


const Timer = () => {
  const [min, setMin] = useState(5);

  const [sec, setSec] = useState(0);

  const [timemin, setTimemin] = useState(6);

  const [timesec, setTimesec] = useState(0);



  const [stop, setStop] = useState("enable")

  const timerid = useRef(null);

  const handletimer = () => {
      setTimemin(min)
      setTimesec(sec)
    if (!timerid.current) {
        setStop("disable")
      let id = setInterval(() => (
        setTimesec((timesec) => timesec - 1)
        ), 1000);
      timerid.current = id;
    
    }
  };

  const handlestop = () => {
      clearInterval(timerid.current);
      setStop("enable");
      timerid.current = null;
  }

  const handlereset = () => {
      setTimemin(min === 5 ? min+1 : min)
      setTimesec(sec);
      setStop("enable");
      clearInterval(timerid.current);
      timerid.current = null;
  }

  useEffect(() => {
      if(timemin === 0 && timesec === 0){
          clearInterval(timerid.current)
      }

      if(timesec === 0){
          setTimesec(60);
          if(timemin > 1){
          setTimemin(timemin - 1)
          }
      }
  },[timemin, timesec])

  return (
    <div className={Styles.timer}>
      
      
      <br/>
    
    <div className={Styles.input}>
      <input  placeholder="M" maxLength="2" onChange={(e) => {setMin(e.target.value)}}/>
      <input placeholder="S" maxLength="2" onChange={(e) => {setSec(e.target.value)}}/>
    </div>

    <div className={Styles.time}>
      <p >{timemin} m</p>
      <p >{timesec < 10?   `0${timesec%60}` : `${timesec%60}`}s</p>
    </div>

      <button  disabled={stop === "disable" ? true : false}  onClick={() => handletimer()}>Start</button>
      <button disabled={stop === "enable" ? true : false}  onClick={() => handlestop()}>Stop</button>
      <button  onClick={() => handlereset()}>Reset</button>
    </div>
  );
};

export default Timer;
