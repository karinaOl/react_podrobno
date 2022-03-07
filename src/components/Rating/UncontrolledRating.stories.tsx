import { Story } from "@storybook/react";
import {UncontrolledRating} from "./UncontrolledRating";

export default {
    title: 'Components/UncontrolledRating',
    component: UncontrolledRating
};

const Template: Story = () => <UncontrolledRating/>

export const UncontrolledRatingStatus = Template.bind({})