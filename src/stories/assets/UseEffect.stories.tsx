import {Story} from "@storybook/react";
import {useEffect, useState} from "react";

export default {
    title: "useEffect demo",
}

export const SimpleExample: Story = () => {

    const [counter, setCounter] = useState(1);

    console.log("SimpleExample")

    useEffect(() => {
        console.log("useEffect every render")
        document.title = counter.toString()
    });

    /*useEffect(()=>{
        console.log("useEffect only first render (componentDidMount)")
        document.title = counter.toString()
    }, []);*/

    /*useEffect(()=>{
        console.log("useEffect first render and every counter change")
        document.title = counter.toString()
    }, [counter])*/

    return <>
        Hello, {counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
}

export const SetTimeoutExample: Story = () => {

    const [counter, setCounter] = useState(1);

    console.log("SetTimeoutExample")

    useEffect(() => {
        console.log("setTimeout")
        setTimeout(() => {
            document.title = counter.toString()
        }, 1000)
    }, [counter]);

      /*useEffect(()=>{
          console.log("setInterval")
          const interval = setInterval(()=>{
              setCounter((state)=>state + 1);
          })
          return () => {
              clearInterval(interval)
          }
      }, []);*/


    return <>
        Hello, {counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
}

export const ResetEffectExample: Story = () => {

    const [counter, setCounter] = useState(1);

    console.log("ResetEffectExample")

    useEffect(() => {
        console.log("useEffect done: " + counter)
        return () => {
            console.log("Reset effect: " + counter)
        }
    }, [counter]);


    return <>
        Hello, {counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
}

export const KeysTrackerExample: Story = () => {

    const [text, setText] = useState("");

    console.log("KeysTrackerExample: " + text)

    useEffect(() => {
        console.log("useEffect done")

        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }

        window.addEventListener("keypress", handler)
        return () => {
            console.log("Reset effect: " + text)
            window.removeEventListener("keypress", handler)
        }
    }, [text]);


    return <>
        Text, {text}
    </>
}

export const SetTimeoutExample2: Story = () => {

    const [text, setText] = useState("");

    console.log("SetTimeoutExample2: " + text)

    useEffect(() => {
        console.log("useEffect done")

        const timeoutID = setTimeout(()=> {
            setText("3 seconds passed")
        }, 3000)

        return () => {
            clearInterval(timeoutID)
        }

    }, [text]);


    return <>
        Text, {text}
    </>
}