import React, {useCallback} from "react";
import {useMemo, useState} from "react";
import {Story} from "@storybook/react";

export default {
    tittle: "useMemo"
}

export const Example1: Story = () => {

    const [a, setA] = useState<number>(3)
    const [b, setB] = useState<number>(3)

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(()=>{
        let tempResultA = 1;
        for (let i = 1; i <= a ; i++) {
            let fake = 0
            while (fake < 1000000000){
                fake++
            }
            tempResultA *= i
        }
        return tempResultA
    }, [a])

    for (let i = 1; i <= b ; i++) {
        resultB *= i
    }

    return(
        <>
            <input value={a} onChange={(e)=>setA(Number(e.currentTarget.value))}/>
            <input value={b} onChange={(e)=>setB(+e.currentTarget.value)}/>
            <hr/>
            <div>
                Result for a: {resultA}
            </div>
            <div>
                Result for b: {resultB}
            </div>
        </>
    )
};

type NewMessagesCounterType = {
    count: number
}

type UsersType = {
    users: Array<string>
}

const UsersSecret = (props: UsersType) => {
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo: Story = () => {

    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(["Karina", "Leha", "Ilona", "Lol"])

    const newArray = useMemo(()=>{
        return users.filter(u=> u.toLowerCase().indexOf("a") > -1)
    }, [users]);

    const addUser = () => {
        const newUser = [...users, "Katya" + new Date().getTime()]
        setUsers(newUser)
    }

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={addUser}>+</button>
            {counter}
            <Users users={newArray}/>
        </>
    )
}

const BooksSecret = (props: {addBook: ()=>void}) => {
    return <div>
        <button onClick={()=>props.addBook()}>add book</button>
    </div>
}

const Books = React.memo(BooksSecret)

export const LikeUseCallback: Story = () => {

    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(["React", "JS", "CSS"])


    const addBook = () => {
        const newUser = [...books, "Angular" + new Date().getTime()]
        setBooks(newUser)
    }

    let memoizedAddBook = useMemo(()=>{
        return()=>{
            const newUser = [...books, "Angular" + new Date().getTime()]
            setBooks(newUser)
        }
    }, [books])

    let memoizedAddBook2 = useCallback(()=>{
            const newUser = [...books, "Angular" + new Date().getTime()]
            setBooks(newUser)

    }, [books])

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
            <Books addBook={addBook} />
        </>
    )
}