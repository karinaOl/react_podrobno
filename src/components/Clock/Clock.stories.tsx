import { Story } from "@storybook/react";
import {Clock, ClockType} from "./Clock";

export default {
    title: "Components/Clock",
    component: Clock
}


export const Template: Story<ClockType> = (args) => <Clock {...args}/>