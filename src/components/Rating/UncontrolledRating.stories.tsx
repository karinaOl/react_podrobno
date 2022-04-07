import { Story } from "@storybook/react";
import {UncontrolledRating, UncontrolledRatingType} from "./UncontrolledRating";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Components/UncontrolledRating',
    component: UncontrolledRating
};

const actionCallback = action('rating changed inside components');

const Template: Story<UncontrolledRatingType> = (args) => <UncontrolledRating {...args}/>

export const UncontrolledRatingStatus0 = Template.bind({});
UncontrolledRatingStatus0.args = {
    defaultValue: 0,
    onChange: actionCallback
}
export const UncontrolledRatingStatus1 = Template.bind({});
UncontrolledRatingStatus1.args = {
    defaultValue: 1,
    onChange: actionCallback
}
export const UncontrolledRatingStatus2 = Template.bind({});
UncontrolledRatingStatus2.args = {
    defaultValue: 2,
    onChange: actionCallback
}
export const UncontrolledRatingStatus3 = Template.bind({});
UncontrolledRatingStatus3.args = {
    defaultValue: 3,
    onChange: actionCallback
}
export const UncontrolledRatingStatus4 = Template.bind({});
UncontrolledRatingStatus4.args = {
    defaultValue: 4,
    onChange: actionCallback
}
export const UncontrolledRatingStatus5 = Template.bind({});
UncontrolledRatingStatus5.args = {
    defaultValue: 5,
    onChange: actionCallback
}
