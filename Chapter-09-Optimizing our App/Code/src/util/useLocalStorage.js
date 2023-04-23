import { useEffect, useState } from "react";

/* Refer custom-hooks.md file for explanation */
const useLocalStorage = (key) => {
  /* Local Storage is a web storage object that stores key/value pairs in the browser.
     useLocalStorage hook will maintain a state for its value so that whenever 
     value is updated in the code, its state can also be updated.
     Note : All the values are stored in local storage as strings. 
     So, we have to convert it to json object before use using JSON.parse()  
  */
  const [value, setValue] = useState(() => {
    const valueOfKey = window.localStorage.getItem(key);
    return JSON.parse(valueOfKey) || []; //JSON.parse converts string into object
  });
  console.log(value);
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value)); //JSON.stringify converts object into string
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
