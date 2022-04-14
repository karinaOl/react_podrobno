import React, {useReducer} from "react";
import {accordionReducer, TOGGLE_COLLAPSED} from "./reducer";

export type UncontrolledAccordionProps = {
    titleValue: string
    //collapsed: boolean
}

type AccordionTitleProps = {
    title: string
    collapsed:boolean
    setCollapsed:()=>void
}

export function UncontrolledAccordion(props: UncontrolledAccordionProps) {
    //let[collapsed, setCollapsed] = useState(false)
    let[state, dispatchCollapsed] = useReducer(accordionReducer,{collapsed: false})

    return (
        <div>
            {/*<AccordionTitle title={props.titleValue} setCollapsed={setCollapsed} collapsed={collapsed}/>*/}
            <AccordionTitle
                title={props.titleValue}
                collapsed={state.collapsed}
                setCollapsed={() => dispatchCollapsed({type: TOGGLE_COLLAPSED})}
            />
            {/*<button onClick={()=>setCollapsed(!collapsed)}>TOGGLE</button>*/}
            {!state.collapsed && <AccordionBody/>}
        </div>
    )
}

function AccordionTitle(props: AccordionTitleProps) {
    return <h3 onClick={props.setCollapsed}>{props.title}</h3>
}

function AccordionBody() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
            </ul>
        </div>
    )
}