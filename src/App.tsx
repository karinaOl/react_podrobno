import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from './components/Rating/Rating';
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import {ControlledOnOff} from "./components/OnOff/ControlledOnOff";

type AppProps = {
    title: string
}

function App() {

    let[ratingValue, setRatingValue] = useState<RatingValueType>(3)
    let[collapsedAccordion, setCollapsedAccordion] = useState(false)
    let[switchOn, setSwitchOn] = useState(false)

    return (
        <div className="App">
            Article 1
            <AppTitle title={'This is'}/>
            <UncontrolledAccordion titleValue={'Menu'}/>
            <AppTitle title={'Users'}/>
            {/*<UnControlledAccordion titleValue={'Users'}/>*/}
            <Accordion titleValue={'Menu'} collapsed={collapsedAccordion} setCollapsedAccordion={setCollapsedAccordion}/>
           {/* <Accordion titleValue={'Users'} collapsed={false}/>*/}
            Article 2
            <Rating value={ratingValue} setRatingValue={setRatingValue}/>
            {/*<UnControlledRating/>*/}
            {/*<ControlledOnOff isOn={switchOn} setSwitchOn={setSwitchOn}/>*/}
            <OnOff setSwitchOn={setSwitchOn}/> {switchOn.toString()}
        </div>
    );
}

function AppTitle(props: AppProps){
    return <div>{props.title}</div>
}

export default App;
