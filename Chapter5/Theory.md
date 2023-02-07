
# Chapter 05 - Let's get Hooked 

## Q:1 What is difference between `Named` export, `default` export, `* as` export?
Ans: As "import" keyword is used for importing any particular component from file, similarly `export` is used to export any component from file. But this import will only work when you have exported that component. Basically you can export any function, variable, component from any file.
## Example-
When you export with default keyword, then on importing, name could be anything, either any name or the name which you gave after default keyword.

default export - //index1.js:
const Test() => {
console.log("test");
}
export default Test;

//index2.js
import test from 'index.js'

Here, I'm extracting component using {} Named export - //index1.js:
export const Test() => {
console.log("test");
}

//index2.js
import {Test} from 'index1.js'

To import multiple components from same file, we use * as * as* export - //index1.js: const Hello = () => { console.log("Hello) } const Test() => { console.log("test"); } export default Test;

//index2.js import * as Index1 from 'index1.js'; <Index1.Hello/>


## Q:2 What is the importance of config.js file?
Ans: Config file allows developers to customize how you interact with the application.
It's good practice to keep your configured data in separate file, and you can name it as constants.js or config.js. Config files are basically build in JSON format(and could be in an any format lile XML etc).



## Q:3 What are React Hooks?
Ans: 
1. React follows the principle of component based architecture. A component is an isolated and reusable piece of code. So you can say that everything in react is component.
2. React hooks are just normal functions that we can use to isolate the resuable part from the functional components.
3. It empowers developers to do functional programming in React.
4. So Hooks are JS functions that manage the state's behaviour and side effects by isolating then from a component.


## Q:4 Why do we need a useState Hook?
Ans: useState() allows you to have state variables in functional components. We use state variable when a component needs to "remember" someinformation between renders. To update any state and to make sync with the UI, we use useState() hook. useState() accepts initial value of state.
Syntax - const [name, setName] = useState("Niharika");
You can update the state with setName() method here.