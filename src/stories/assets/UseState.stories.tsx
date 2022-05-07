import {useState} from "react";
import {Story} from "@storybook/react";


export default {
    title: "useState demo"
}

const generateData = () => {
    console.log("generateData")
    return 1;
}

export const Example1: Story = () => {

    console.log("Example1");
    const [counter, setCounter] = useState(generateData);

    return<>
        <button onClick={()=>setCounter(state => state + 1)}>+</button>
        {counter}
    </>
}