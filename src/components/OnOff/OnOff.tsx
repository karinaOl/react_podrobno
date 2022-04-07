import React, {useState} from "react";

export type OnOffPropsType = {
    setSwitchOn:(on: boolean)=>void
    defaultValue?: boolean
}

export const OnOff = (props: OnOffPropsType) => {
    let[on, setOn] = useState<boolean>(props.defaultValue ? props.defaultValue : false)

    const onStyle = {
        border: '1px solid black',
        display: 'inline-block',
        padding: '5px 10px',
        backgroundColor: on ? 'green' : 'white'
    }

    const offStyle = {
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '5px 10px',
        backgroundColor: on ? 'white' : 'red'
    }

    const circle = {
        border: '1px solid black',
        width: '15px',
        height: '15px',
        borderRadius: '15px',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red'
    }

    const onClicked=()=>{
        setOn(true)
        props.setSwitchOn(true)
    }
    const offClicked=()=>{
        setOn(false)
        props.setSwitchOn(false)
    }

    return (
        <div className={'all'}>
            <div style={onStyle} onClick={onClicked}>on</div>
            <div style={offStyle} onClick={offClicked}> off</div>
            <div style={circle}/>
        </div>
    )
}