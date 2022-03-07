import { Story } from "@storybook/react";
import {UncontrolledAccordion, UncontrolledAccordionProps} from "./UncontrolledAccordion";

export default {
    title: 'Components/UncontrolledAccordion',
    component: UncontrolledAccordion
}

const Template: Story<UncontrolledAccordionProps> = (args) => <UncontrolledAccordion {...args}/>

export const UncontrolledAccordionStatus = Template.bind({});
UncontrolledAccordionStatus.args = {
    titleValue: 'Users'
}