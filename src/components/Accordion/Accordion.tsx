import React from "react";

type AccordionProps = {
    titleValue: string
    collapsed: boolean
    setCollapsedAccordion: (collapsedAccordion: boolean)=>void
}


export function Accordion(props: AccordionProps) {
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={()=>props.setCollapsedAccordion(!props.collapsed)} />
            {!props.collapsed === false && <AccordionBody/>}
        </div>
    )
}

/*export function Accordion2(props: AccordionProps) {
    if (props.collapsed === true) {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
            </div>
        )
    } else {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
                <AccordionBody/>
            </div>
        )
    }

}*/

type AccordionTitleProps = {
    title: string
    onClick: ()=> void
}

function AccordionTitle(props: AccordionTitleProps) {
    return <h3 onClick={props.onClick}>{props.title}</h3>
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