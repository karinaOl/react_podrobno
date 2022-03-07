import React, {useState} from "react";

type AccordionProps = {
    titleValue: string
    //collapsed: boolean
}

type AccordionTitleProps = {
    title: string
    collapsed:boolean
    setCollapsed:(collapsed:boolean)=>void
}

export function UnControlledAccordion(props: AccordionProps) {

    let[collapsed, setCollapsed] = useState(false)


    return (
        <div>
            <AccordionTitle title={props.titleValue} setCollapsed={setCollapsed} collapsed={collapsed}/>
            {/*<button onClick={()=>setCollapsed(!collapsed)}>TOGGLE</button>*/}
            {!collapsed && <AccordionBody/>}
        </div>
    )
}



function AccordionTitle(props: AccordionTitleProps) {

    const onClickHandlerCollapsed = () => {
        props.setCollapsed(!props.collapsed)
    }

    return <h3 onClick={onClickHandlerCollapsed}>{props.title}</h3>
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