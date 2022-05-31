import React, { useEffect, useRef, useState } from 'react'
import Styles from "./Stopwatch.module.css"

const Stopwatch = () => {
    const [time, setTime] = useState(0)

    const [sec, setSec] = useState(0);

    const [min, setMin] = useState(0);

    const [stop, setStop] = useState("enable")


    const timerid = useRef(null)

    const handletimestart = () => {
        if(!timerid.current){
            setStop("disable")
        let id = setInterval(() => (
            setTime((time) => time + 1)
        ),17);

        timerid.current=id
        }
    }

    useEffect(() => {
        setSec(Math.floor(time/60));
    },[time])

    useEffect(() => {
        setMin(Math.floor(sec/60));
    },[time])

    const handletimereset = () => {
        setStop("enable")
        setTime(0);
        setSec(0);
        clearInterval(timerid.current)
        timerid.current=null
    }

    const handletimestop = () => {
        setStop("enable")
        clearInterval(timerid.current)
        timerid.current=null
    }
  return (
    <div>

        <div className={Styles.time}>
            <p className={Styles.timemin}>{min%60}m</p>
            <p className={Styles.timesec}>{sec%60}s</p>
            <p className={Styles.timesec}>{time%60}</p>
        </div>
        

        <button disabled={stop === "disable" ? true : false} onClick={() => {handletimestart()}}>Start</button>

        <button  disabled={stop === "enable" ? true : false} onClick={() => {handletimestop()}}>Stop</button>

        <button  onClick={() => {handletimereset()}}>Reset</button>
    </div>
  )
}

export default Stopwatch