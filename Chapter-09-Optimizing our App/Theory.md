## Namaste React Course by Akshay Saini
# Chapter - 09 Optimizing our app


# Q.1. When and why do we need lazy()?
Ans: Whenever large application is build, let's say "Make my trip", these kind of applications has 100's of components, where everything is bundled into one JS file that results in slow performance of the application. In large scale application, it doesn't not make sense to put all our components in one JS file. So to avoid this problem we need to do chunking/code splitting/dynamic bundling/lazy loading/on demand loading/dynamic import. These all are technical terms which are used for Lazy loading. 
Bundling everything is good only till limit. So you proceed with creating different chunks that will optimize your code to next level which helps in System Design.
React.lazy is used to dynamically import a component when it is first rendered, instead of importing at the beginning when the file loads. This is called Code lazy loading.

In our example : In App.js, Instamart component and about component are lazy loaded, which means only when the user clicks on the navigation button, those components are imported and rendered. This improves the performance of the application. So, lazy is used when that component might not be used by all users, instead of loaded in the beginning, only when the user really needs it, its loaded.

Example of syntax -

``` 
import { lazy } from 'react';
const Instamart = lazy(()=>{import("./components/Instamart)}); //lazy loaded (lazy takes a function)
import Instamart from "./components/Instamart"; //NOT lazy loaded
```

# Q.2. What is suspense?
Ans: Suspense component allows us to show some fallback content (such as a loading indicator/ Shimmer component) while we’re waiting for the lazy component to load or the component is not yet rendered. It is similar to catch block.

More understanding - When you click on instamart component, this is different bundle altogether, so it will take some time to load the script and meanwhile react tries to render the component. As component hasn't yet loaded and it tries to load the component, error will be thrown. During all this process, react suspends the rendering. So to avoid this suspend, Suspense component is used with fallback prop.
```
import React, { Suspense } from 'react';

const About = React.lazy(() => import('./About'));

function MyComponent() {
return (
  <div>
    <Suspense fallback={<div>Loading...</div>}>
      <About />
    </Suspense>
  </div>
);
}
```
The fallback prop accepts any React elements that you want to render while waiting for the component to load. You can place the Suspense component anywhere above the lazy component. You can even wrap multiple lazy components with a single Suspense component.


# Q.3. Why we got this error : A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition? How does suspense fix this error?
Ans: This error is thrown as Exception by React when the promise to dynamically import the lazy component is not yet resolved and the Component is expected to render in the meantime. If only the dynamic import is done and there is no <Suspense /> component then this error is shown. React expects a Suspense boundary to be in place for showing a fallback prop until the promise is getting resolved. If showing the shimmer (loading indicator) is not desirable in some situations, then startTransistion API can used to show the old UI while new UI is being prepared. React do this without having to delete or remove the Suspense component or its props from your code.


# Q:4. Advantages and disadvantages of using this code splitting pattern?
Ans :
Advantages -
- Reduces the page load time by bundling the large code into smaller bundles and laoding dynamically only when the component is loaded.
- Only the components that the user needs are loaded initially.
- Imporves the user experience during suspension by showing loading/shimmer indicator usinf fallback prop.

Disadvantages -
- Though the initial page load time is reduced, this increases the load time of each component that loads    dynamically.
- There will be many http requests as the components are loaded dynamically.
- But, this suspense boundary needs a new chunk of code to be written for showing the shimmer component.


# Q:5. When do we and why do we need suspense?
Ans: Suspense are useful when the components are waiting (React.lazy components are getting dynamically loaded) before rendering. Today, React Suspense only supports one use case which is loading components dynamically with React lazy(). In the future, it will support other use cases like data fetching.