import {Story} from "@storybook/react";
import React, {useState} from "react";

export default {
    title: "REACT-MEMO-DEMO"
}

type NewMessagesCounterType = {
    count: number
}

type UsersType = {
    users: Array<string>
}

const NewMessagesCounter = (props: NewMessagesCounterType) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: UsersType) => {
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)

export const Example1: Story = () => {

    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(["Karina", "Leha", "Ilona"])

    const addUser = () => {
        const newUser = [...users, "Katya" + new Date().getTime()]
        setUsers(newUser)
    }

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={addUser}>add user</button>
            <NewMessagesCounter count={counter}/>
            <Users users={users}/>
        </>
    )
}