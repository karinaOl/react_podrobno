import s from "./Select.module.css"
import {useState, KeyboardEvent, useEffect} from "react";

export type ItemType = {
    title: string
    value: any
}

export type SelectType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const Select = (props: SelectType) => {

    const [active, setActive] = useState(false)

    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const toggleItems = () => {
        setActive(!active)
    }

    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems()
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === "ArrowUp"
                        ? props.items[i+1]
                        : props.items[i-1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                    }
                }
            }
            if(!selectedItem){
                props.onChange(props.items[0].value);
            }
        }
        if (e.key === "Enter" || e.key === "Escape"){
            setActive(false)
        }
    }

    return (
        <>
            <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
                <span className={s.main} onClick={toggleItems}>
                    {selectedItem && selectedItem.title}
                </span>
                {active &&
                <div className={s.items}>
                    {props.items.map((i => <div
                        onMouseEnter={() => {
                            setHoveredElementValue(i.value)
                        }}
                        key={i.value}
                        onClick={() => onItemClick(i.value)}
                        className={s.item + " " + (hoveredItem === i ? s.selected : "")}>{i.title}</div>))}
                </div>
                }
            </div>
        </>
    )
}