import {Select, SelectType} from "./Select";
import {Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import {useState} from "react";

export default {
    title: "Components/Select",
    component: Select
}

const actionCallback = action("value changed")

const Template: Story<SelectType> = (args) => <Select {...args}/>

export const SelectWithValue = Template.bind({})
SelectWithValue.args = {
    value: "1",
    items: [
        {value: "1", title: "Minsk"},
        {value: "2", title: "Kiev"},
        {value: "3", title: "Paris"}],
    onChange: actionCallback
}

export const SelectWithoutValue = Template.bind({});
SelectWithoutValue.args = {
    value: null,
    items: [
        {value: "1", title: "Easy"},
        {value: "2", title: "Middle"},
        {value: "3", title: "Hard"}
    ],
    onChange: actionCallback
}

export const SelectValueChanged: Story<SelectType> = (args) => {
  let [value, setValue] = useState('1')
    return(
        <Select {...args} value={value} onChange={setValue}/>
    )

}
SelectValueChanged.args = {
    items: [
        {value: "1", title: "Easy"},
        {value: "2", title: "Middle"},
        {value: "3", title: "Hard"}
    ]
}