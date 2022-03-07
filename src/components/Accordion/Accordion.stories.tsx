import {Accordion, AccordionProps} from "./Accordion";
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react";
import {useState} from "react";

export default {
    title: 'Components/Accordion',
    component: Accordion
}

const actionCallback = action('collapsed changed');

const Template: Story<AccordionProps> = (args) => <Accordion {...args}/>

export const CollapsedTrue = Template.bind({})
CollapsedTrue.args = {
    titleValue: 'Users',
    setCollapsedAccordion: actionCallback,
    collapsed: true
}

export const CollapsedFalse = Template.bind({});
CollapsedFalse.args = {
    titleValue: 'Users',
    setCollapsedAccordion: actionCallback,
    collapsed: false
}

export const AccordionCollapsed: Story<AccordionProps> = (args) => {
    let[collapsed, setCollapsed] = useState(false)
    return(
        <Accordion {...args} collapsed={collapsed} setCollapsedAccordion={setCollapsed}/>
    )
}

AccordionCollapsed.args = {
    titleValue: 'Users'
}