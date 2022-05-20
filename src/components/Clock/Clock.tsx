import React, {useEffect, useState} from "react";
import {clear} from "@testing-library/user-event/dist/clear";
import {AnalogClock} from "./AnalogClock";
import {DigitalClock} from "./DigitalClock";


export type ClockViewPropsType = {
    date: Date
};

export type ClockType = {
    mode?: "digital" | "analog"
}

export const Clock: React.FC<ClockType> = (props) => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date())
        }, 1000);
        return () => {
            clearInterval(intervalID)
        }
    }, []);

    let view;

    switch (props.mode) {
        case  "analog" :
            view = <AnalogClock date={date}/>
            break;
        case "digital":
            view = <DigitalClock date={date}/>
    }

    return (
        <div>
            {view}
        </div>
    )
}