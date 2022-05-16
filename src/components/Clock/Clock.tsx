import React, {useEffect, useState} from "react";
import {clear} from "@testing-library/user-event/dist/clear";


export type ClockType = {}

const get2digitsString = (num: number) =>  num < 10 ? "0"+num : num

export const Clock: React.FC<ClockType> = () => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date())
        }, 1000);
        return ()=>{
            clearInterval(intervalID)
        }
    }, []);

    return (
        <div>
            <span>{get2digitsString(date.getSeconds())}</span>
            :
            <span>{get2digitsString(date.getMinutes())}</span>
            :
            <span>{get2digitsString(date.getHours())}</span>
        </div>
    )
}