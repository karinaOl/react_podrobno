import React from "react";

type ItemType = {
    title: string
    value: any
}

export type AccordionProps = {
    titleValue: string
    collapsed: boolean
    setCollapsedAccordion: (collapsedAccordion: boolean)=>void
    items: Array<ItemType>
    onClick: (value:any)=>void
}


export function Accordion(props: AccordionProps) {
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={()=>props.setCollapsedAccordion(!props.collapsed)} />
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
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

type AccordionBodyType = {
    items: ItemType[]
    onClick: (value:any)=>void
}

function AccordionBody(props: AccordionBodyType) {
    return (
        <div>
            <ul>
                {props.items.map((i,index)=>{
                    return(
                        <li onClick={()=>{props.onClick(i.value)}} key={index}>{i.title}</li>
                    )
                })}
            </ul>
        </div>
    )
}