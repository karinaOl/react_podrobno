export type ActionType = {
    type: "TOGGLE-COLLAPSED"
}

export const TOGGLE_COLLAPSED = "TOGGLE-COLLAPSED"

export type StateType = {
    collapsed: boolean
}

export const accordionReducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case TOGGLE_COLLAPSED:
            return {...state, collapsed: !state.collapsed};
        default:
            throw new Error("Bad action type")
    }
    /*if(action.type === TOGGLE_COLLAPSED){
        return !state
    }
    return state*/
}