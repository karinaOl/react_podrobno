import {accordionReducer, StateType, TOGGLE_COLLAPSED} from "./reducer";
import {action} from "@storybook/addon-actions";

test("reducer changed true", () => {
    const state: StateType = {
        collapsed: false
    }

    accordionReducer(state, {type: TOGGLE_COLLAPSED})

    expect(state.collapsed).toBe(true)

})
test("reducer changed false", () => {
    const state: StateType = {
        collapsed: true
    }

    accordionReducer(state, {type: TOGGLE_COLLAPSED})

    expect(state.collapsed).toBe(true)

})