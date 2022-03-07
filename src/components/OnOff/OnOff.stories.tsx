import {OnOff, OnOffPropsType} from "./OnOff";
import {Story} from "@storybook/react";
import { action } from "@storybook/addon-actions";

export default {
    title: 'Components/OnOff',
    component: OnOff
}

const actionCallback = action('status change');

const Template: Story<OnOffPropsType> = (args) => <OnOff {...args}/>;

export const OnnOffStatus = Template.bind({});

OnnOffStatus.args = {
    setSwitchOn: actionCallback
};