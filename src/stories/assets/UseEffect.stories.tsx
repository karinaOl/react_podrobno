import {Story} from "@storybook/react";
import {useEffect, useState} from "react";

export default {
    title: "useEffect demo",
}

export const SimpleExample: Story = () => {

    const [counter, setCounter] = useState(1);

    console.log("SimpleExample")

    useEffect(()=>{
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

  return<>
      Hello, {counter}
      <button onClick={()=>setCounter(counter+1)}>+</button>
  </>
}

export const SetTimeoutExample: Story = () => {

    const [counter, setCounter] = useState(1);

    console.log("SetTimeoutExample")

    useEffect(()=>{
        console.log("setTimeout")
        setTimeout(()=>{
            document.title = counter.toString()
        }, 1000)
    }, [counter]);

  /*  useEffect(()=>{
        console.log("setInterval")
        setInterval(()=>{
            setCounter((state)=>state + 1);
        })
    }, []);*/


  return<>
      Hello, {counter}
      <button onClick={()=>setCounter(counter+1)}>+</button>
  </>
}