import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

export type RatingProps = {
    value: RatingValueType
    setRatingValue: (value: RatingValueType)=>void
}


export function Rating(props:RatingProps) {
    return (
        <div>
            <Star selected={props.value > 0} onClick={props.setRatingValue} value={1}/>
            <Star selected={props.value > 1} onClick={props.setRatingValue} value={2}/>
            <Star selected={props.value > 2} onClick={props.setRatingValue} value={3}/>
            <Star selected={props.value > 3} onClick={props.setRatingValue} value={4}/>
            <Star selected={props.value > 4} onClick={props.setRatingValue} value={5}/>
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
    onClick: (value: RatingValueType)=>void
    value: RatingValueType
}

function Star(props: StarProps) {

    return <span onClick={()=>props.onClick(props.value)}>{props.selected ? <b>star </b> : ' star' }</span>

    /*if(props.selected === true){
        return <span><b>star </b></span>
    }else{
        return <span>star </span>
    }
*/
}