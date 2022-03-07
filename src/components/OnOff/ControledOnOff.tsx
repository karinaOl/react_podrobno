import {useState} from "react";

type ControlledOnOffType = {
    isOn: boolean
    setSwitchOn: (switchOn:boolean) => void
}

export const ControlledOnOff = (props: ControlledOnOffType) => {


    const onStyle = {
        border: '1px solid black',
        display: 'inline-block',
        padding: '5px 10px',
        backgroundColor: props.isOn ? 'green' : 'white'
    }

    const offStyle = {
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '5px 10px',
        backgroundColor: props.isOn ? 'white' : 'red'
    }

    const circle = {
        border: '1px solid black',
        width: '15px',
        height: '15px',
        borderRadius: '15px',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.isOn ? 'green' : 'red'
    }
    return (
        <div className={'all'}>
            <div style={onStyle} onClick={()=>props.setSwitchOn(true)}>on</div>
            <div style={offStyle} onClick={()=>props.setSwitchOn(false)}> off</div>
            <div style={circle}></div>
        </div>
    )
}