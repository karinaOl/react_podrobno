import {ControlledOnOff, ControlledOnOffType} from "./ControlledOnOff";
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react";
import {useState} from "react";

export default {
    title: 'Components/Controlled OnOff',
    component: ControlledOnOff
}

const actionCallback = action('switch change');

const Template: Story<ControlledOnOffType> = (args) => <ControlledOnOff {...args}/>

export const StatusOn = Template.bind({});
StatusOn.args = {
    isOn: true,
    setSwitchOn: actionCallback
}
export const StatusOff = Template.bind({});
StatusOff.args = {
    isOn: false,
    setSwitchOn: actionCallback
}

export const SwitchOnOff: Story<ControlledOnOffType> = (args) => {

    let[on, setOn] = useState(false)

    return (
        <ControlledOnOff {...args} isOn={on} setSwitchOn={setOn}/>
    )
}