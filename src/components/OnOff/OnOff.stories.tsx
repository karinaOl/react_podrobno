import {OnOff, OnOffPropsType} from "./OnOff";
import {Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Components/OnOff',
    component: OnOff
}

const actionCallback = action('status change');

const Template: Story<OnOffPropsType> = (args) => <OnOff {...args}/>;

export const OnStatus = Template.bind({});
OnStatus.args = {
    setSwitchOn: actionCallback,
    defaultValue: true
};
export const OffStatus = Template.bind({});
OffStatus.args = {
    setSwitchOn: actionCallback,
    defaultValue: false
}

