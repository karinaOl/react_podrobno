import {Story} from "@storybook/react";
import {useRef, useState} from "react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'input'
}

export const UncontrolledInput: Story = () => <input/>

export const TrackValueUncontrolledInput: Story = () => {
    const [value, setValue] = useState('')
    return <><input onChange={(e)=>setValue(e.currentTarget.value)}/> {value}</>
}

export const GetValueOfUncontrolledInputByButtonPress: Story = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
      let el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <><input ref={inputRef}/><button onClick={save}>save</button> actual value: {value}</>
}

export const ControlledInputWithFixedValue: Story = () => <input value={'it-incubator.by'}/>

export const ControlledInput: Story = () => {
    const[parentValue, setParentValue] = useState('')

    return <input value={parentValue} onChange={(e)=>setParentValue(e.currentTarget.value)}/>
}

export const ControlledCheckbox: Story = () => {
    const[parentValue, setParentValue] = useState(true)

    return <input type={"checkbox"} checked={parentValue} onChange={(e)=>setParentValue(e.currentTarget.checked)}/>
}

export const ControlledSelected: Story = () => {
    const[parentValue, setParentValue] = useState<string | undefined>(undefined)

    return <select value={parentValue} onChange={(e)=>setParentValue(e.currentTarget.value)}>
        <option>none</option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Moscow</option>
        <option value={'3'}>Kiev</option>
    </select>
}