import {Accordion, AccordionProps} from "./Accordion";
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react";
import {useState} from "react";

export default {
    title: 'Components/Accordion',
    component: Accordion
}

const actionCallback = action('collapsed changed');
const onClickCallback = action('some item was clicked');

const Template: Story<AccordionProps> = (args) => <Accordion {...args}/>

export const CollapsedTrue = Template.bind({})
CollapsedTrue.args = {
    titleValue: 'Users',
    setCollapsedAccordion: actionCallback,
    collapsed: true,
    items: [],
    onClick: onClickCallback
}

export const CollapsedFalse = Template.bind({});
CollapsedFalse.args = {
    titleValue: 'Users',
    setCollapsedAccordion: actionCallback,
    collapsed: false,
    items: [{title: "Karina", value: 1},{title: "Leha", value: 2},{title: "Vika", value: 3},{title: "Katya", value: 4}],
    onClick: onClickCallback
}

export const AccordionCollapsed: Story<AccordionProps> = (args) => {
    let[collapsed, setCollapsed] = useState(false)
    return(
        <Accordion
            {...args}
            collapsed={collapsed}
            setCollapsedAccordion={setCollapsed}
            onClick={(id) => alert(`Id: ${id}`)}
        />
    )
}

AccordionCollapsed.args = {
    titleValue: 'Users',
    items: [{title: "Karina", value: 1},{title: "Leha", value: 2},{title: "Vika", value: 3},{title: "Katya", value: 4}],
}