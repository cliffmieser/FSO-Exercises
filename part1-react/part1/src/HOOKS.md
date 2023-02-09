#Regarding hooks
#DO NOT call Hooks inside loops, conditions, or nested functions
Instead; use Hooks at the top level of your react function I.E "App()"
#Don't call Hooks from regular JavaScript functions
- Call Hooks from React function components
- Call Hooks from custom Hooks (a function defined OUTSIDE of the
   functional component, that uses the built in Hooks)


```javascript
const App = () => {
  //these are ok
  const [age, setAge] = useState(0);
  const [name, setName] = useState("Barry Johnston");

#will not work
const notGood = () =>{
  // illegal use of hooks
  const [x, setX]  = useState(50);
}

}
```
