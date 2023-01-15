
# Chapter 04 - Talk is Cheap, show me the code

## Q:1 Is `JSX` mandatory for React?
Ans: 
1. `JSX` is an Extension Syntax that allows writing HTML and Javascript together easily in React and is used to create React elements. These elements are then rendered to the React DOM. 
2. JSX is not HTML. It's just HTML like syntax. Each JSX element is just to make use of React easy and for calling React.createElement(component, props, …children) with less work. 
3. So, anything that is done with JSX can also be done with just plain JavaScript. 
4. So `JSX` is not mandatory but is used for writing better and clean code instead of writing code using `React.CreateElement`.


## Q:2 Is `ES6` mandatory for React?
Ans: `ES6` is not mandatory for `React` but is highly recommendable. The latest projects created on React rely a lot on ES6. React uses ES6, and you should be familiar with some of the new features like: Classes, Arrow Functions, Variables(let, const), Destructuring, Spread Operator and many more.
ES6 stands for ECMAScript 6. ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015.


## Q:3 `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.
Ans: The Difference is stated below:
- `{TitleComponent}`: This value describes the `TitleComponent` as a javascript expression or a variable or React element. 
The `{}` can embed a javascript expression or a variable or React element inside it.

- `<TitleComponent/>` : This value represents a "Component" that is basically returning some JSX value. Components name must always starts with capital letter.

- `<TitleComponent></TitleComponent>` :  `<TitleComponent />` and `<TitleComponent></TitleComponent>` are equivalent only when `< TitleComponent />` has no child components. The opening and closing tags are created to include the child components.
#### Example
```
<TitleComponent>
    <FirstChildComponent />
    <SecondChildComponent />
    <ThirdChildComponent />
</TitleComponent>
```


## Q:3 How can I write `comments` in JSX?
Ans: JSX comments are written as follows:
- `{/*  */}` - for single or multiline comments
#### Example
```
{/* A JSX comment */}
{/* 
  Multi
  line
  JSX
  comment
*/}  
```

## Q:4 What is `<React.Fragment></React.Fragment>` and `<></>`?
Ans: `<React.Fragment></React.Fragment>` is a feature in React that allows you to return multiple elements from a React component by allowing you to group a list of children without adding extra nodes to the DOM.
`<></>` is the shorthand tag for `React.Fragment`. The only difference between them is that the shorthand version does not support the key attribute.
#### Example
```
return (
        <React.Fragment>
            <Header />
            <Navigation />
            <Main />
            <Footer />
        </React.Fragment>
    );

return (
        <>
            <Header />
            <Navigation />
            <Main />
            <Footer />
        </>
    );
```


## Q:5 What is `Reconciliation` in React?
Ans: 
1. `Reconciliation` is the process through which React updates the Browser DOM and makes React work faster.Reconciliation uses a `diffing algorithm` that is triggered during the change of state or any node of tree is changed, which makes React faster to predict changes and re-render them. 
2. React would first calculate the difference between the real DOM and the representation of DOM (Virtual DOM) when there's an update of components or state.
3. React stores a representaion(copy) of Browser DOM which is called `Virtual DOM`. When we make changes or add data, React creates a new Virtual DOM and compares the Virtual DOM with Real DOM(old one). Comparison is performed by `Diffing Algorithm`.
4. It finds out the changed nodes and updates only the changed nodes in Real DOM leaving the rest nodes as it is. This process is called Reconciliation.


## Q:6 What is `React Fiber`?
Ans: React Fiber is a concept of ReactJS that is used to render a system faster, smoother and smarter.
The Fiber reconciler, which became the default reconciler for React 16 and above, is a complete rewrite of React’s reconciliation algorithm to solve some long-standing issues in React.
Because Fiber is asynchronous, React can:
- Pause, resume, and restart rendering work on components as new updates come in
- Reuse previously completed work and even abort it if not needed
- Split work into chunks and prioritize tasks based on importance


## Q:7 Why do we need `keys` in React?
Ans: A `key` is a special attribute you need to include when creating lists of elements in React. We can say that keys are unique Identifier used to give an unique identity to the elements in the lists.
Mostly keys are used when you have multiple same elements to give unique identity to each element. This helps React to recognize which element to place in which position.
#### Example
```
<li key={0}>1</li>
<li key={1}>2</li>
<li key={2}>3</li>
```


## Q:8 Can we use `index as keys` in React?
Ans: Yes, we can use the `index as keys`, but it is not considered as a good practice to use them because if the order of items may change. This can negatively impact performance and may cause issues with component state.
Keys are taken from each object which is being rendered. There might be a possibility that if we modify the incoming data react may render them in unusual order.


## Q:9 What is `props in React`?
Ans: Props stands for properties. Props are arguments passed into React components. Props are used in React to pass data from one component to another (from a parent component to a child component(s)). They are useful when you want the flow of data in your app to be dynamic.
#### Example
```
function App() {
  return (
    <div className="App">
      <Tool name="Niharika" tool="vsCode"/> // name and tool are props
    </div>
  )
}
```

## Q:10 What is `Config Driven UI`?
Ans: 
1. `Config Driven UI` are based on the configurations of the data application receives. It is rather a good practice to use config driven UIs to make application for dynamic. 
2. Basically config driven UI is just the data that you either gets form backend or any object. This configuration is build usually in JSON format as it's easily readable.
3. It is a very common & basic approach to interact with the User. It provides a generic interface to develop things which help your project scale well. It saves a lot of development time and effort.


## Q:11 Difference between `Virtual DOM` and `Real DOM`?
Ans: DOM stands for `Document Object Model`, which represents your application UI and whenever the changes are made in the application, this DOM gets updated and the user is able to visualize the changes. DOM is an interface that allows scripts to update the content, style, and structure of the document.
- `Virtual DOM`
    - The Virtual DOM is a light-weight abstraction of the DOM. You can think of it as a representation(copy) of the DOM, that can be updated without affecting the actual DOM. It has all the same properties as the real DOM object, but doesn’t have the ability to write to the screen like the real DOM.
    - Virtual DOM is just like a blueprint of a machine, can do the changes in the blueprint but those changes will not directly apply to the machine.
    - Reconciliation is a process to compare and keep in sync the two files (Real and Virtual DOM). Diffing algorithm is a technique of reconciliation which is used by React.
- `Real DOM`
    - The DOM represents the web page often called a document with a logical tree and each  branch of the tree ends in a node and each node contains object programmers can modify the content of the document using a scripting language like javascript and the changes and updates to the dom are fast because of its tree-like structure but after changes, the updated element and its children have to be re-rendered to update the application UI so the  re-rendering of the UI which make the dom slow all the UI components you need to be rendered for every dom update so real dom would render the entire list and not only those item that receives the update .

|   `Real DOM`    |   `Virtual DOM` |
|-------------|-----------------|
| DOM manipulation is very expensive  | DOM manipulation is very easy  | 
| There is too much memory wastage  | No memory wastage  |
| It updates Slow | It updates fast |
| It can directly update HTML | It can’t update HTML directly  |
|  Creates a new DOM if the element updates. | Update the JSX if the element update |
| It allows us to directly target any specific node (HTML element) | It can produce about 200,000 Virtual DOM Nodes / Second. |
| It represents the Ul of your application | It is only a virtual representation of the DOM |