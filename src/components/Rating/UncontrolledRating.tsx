import React, {useState} from "react";
import {RatingValueType} from "./Rating";



export type UncontrolledRatingType = {
    defaultValue?: RatingValueType
    onChange: (value:RatingValueType)=>void
}

export function UncontrolledRating(props: UncontrolledRatingType) {

    let [value, setValue] = useState(props.defaultValue ? props.defaultValue : 0)
    return (
        <div>
            <Star selected={value > 0} setValue={() => {setValue(1); props.onChange(1)}}/>
            <Star selected={value > 1} setValue={() => {setValue(2); props.onChange(2)}}/>
            <Star selected={value > 2} setValue={() => {setValue(3); props.onChange(3)}}/>
            <Star selected={value > 3} setValue={() => {setValue(4); props.onChange(4)}}/>
            <Star selected={value > 4} setValue={() => {setValue(5); props.onChange(5)}}/>
        </div>
    )
    /* if(props.value === 1){
         return (
             <div>
                 <Star selected={true}/>
                 <Star selected={false}/>
                 <Star selected={false}/>
                 <Star selected={false}/>
                 <Star selected={false}/>
             </div>
         )
     }if(props.value === 2){
         return (
             <div>
                 <Star selected={true}/>
                 <Star selected={true}/>
                 <Star selected={false}/>
                 <Star selected={false}/>
                 <Star selected={false}/>
             </div>
         )
     }if(props.value === 3){
         return (
             <div>
                 <Star selected={true}/>
                 <Star selected={true}/>
                 <Star selected={true}/>
                 <Star selected={false}/>
                 <Star selected={false}/>
             </div>
         )
     }if(props.value === 4){
         return (
             <div>
                 <Star selected={true}/>
                 <Star selected={true}/>
                 <Star selected={true}/>
                 <Star selected={true}/>
                 <Star selected={false}/>
             </div>
         )
     }if(props.value === 5){
         return (
             <div>
                 <Star selected={true}/>
                 <Star selected={true}/>
                 <Star selected={true}/>
                 <Star selected={true}/>
                 <Star selected={true}/>
             </div>
         )
     }else{
         return (
             <div>
                 <Star selected={false}/>
                 <Star selected={false}/>
                 <Star selected={false}/>
                 <Star selected={false}/>
                 <Star selected={false}/>
             </div>
         )
     }*/
}

type StarProps = {
    selected: boolean
    setValue: () => void
}

function Star(props: StarProps) {


    return (
        <span onClick={() => props.setValue()}>
                {props.selected ? <b>star </b> : ' star'}
            </span>
    )

    /*return props.selected ? <span><b>star </b></span> : <span>star </span>*/

    /*if(props.selected === true){
        return <span><b>star </b></span>
    }else{
        return <span>star </span>
    }*/
}