# Chapter 03 - Laying the Foundation
__________________________________________________________________________________________________________

## Q:1 What is `JSX`?
Ans: 
1. JSX stands for JavaScript XML. It's a javacscript extension. JSX makes it easier to write and add HTML in React. JSX converts HTML tags into react elements.
2. Using React.createElement() to create multiple elements, and also element inside element can be a huge code and makes our code look messy. So to make our task easy and make things look clean, facebook developers have developed JSX. JSX is not HTML but it's just HTML like syntax. JSX is treated as React.createElement() behind the scene and this conevrsion is performed by Babel.
3. JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() and/or appendChild() methods.

### Example 1 using JSX:
```
const heading = <h1>Hello! I am H1 tag created using JSX</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
```
### Example 2 Without JSX:
```
const heading = React.createElement('h1', {}, 'I do not use JSX!');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
```


## Q:2 What are Superpowers of `JSX`?
Ans: Using JSX, you can write markup inside Javascript, providing you with a superpower to write logic and markup of a component inside a single .jsx file. JSX is easy to maintain and debug, as it's more readable.
If you want to use javascript inside JSX then you can only use Javascript expression inside {}.
### Example
```
function greeting(user) {
//JSX
  return <h1>{user}, How are you!!!</h1>; 
  //user is parameter here, you can use object also, expressions also(ternary operator[you can't use if inside {}])
}
```


## Q:3 Role of `type` attribute in script tag? What options can I use there?
Ans: The `type` attribute specifies the type of the script. The type attribute identifies the content between the `<script>` and `</script>` tags. It has a Default value which is “text/javascript”.
### `type` attribute can be of the following types:
1. `text/javascript` : It is the basic standard of writing javascript code inside the `<script>` tag.
    ### Syntax
    ```
    <script type="text/javascript"></script>
    ```
2. `text/ecmascript` : this value indicates that the script is following the `EcmaScript` standards.
3. `module`: This value tells the browser that the script is a module that can import or export other files or modules inside it.
4. `text/babel` : This value indicates that the script is a babel type and required bable to transpile it.
5. `text/typescript`: As the name suggest the script is written in `TypeScript`.


## Q:4 `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.
Ans: The Difference is stated below:
- `{TitleComponent}`: This value describes the `TitleComponent` as a javascript expression or a variable. 
The `{}` can embed a javascript expression or a variable inside it.
- `<TitleComponent/>` : This value represents a Component that is basically returning Some JSX value. In simple terms `TitleComponent` a function that is returning a JSX value.
A component is written inside the `{<  />}` expression.
- `<TitleComponent></TitleComponent>` :  `<TitleComponent />` and `<TitleComponent></TitleComponent>` are equivalent only when `< TitleComponent />` has no child components. The opening and closing tags are created to include the child components.
### Example
```
<TitleComponent>
    <FirstChildComponent />
    <SecondChildComponent />
    <ThirdChildComponent />
</TitleComponent>
```