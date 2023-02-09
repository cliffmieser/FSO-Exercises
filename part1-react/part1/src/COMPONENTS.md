#Do Not Define Components Within Components

```javascript

const App = () => {
  const [value, setValue] = useState(10);

  //Do no dine components inside another component
  const Display = props => <div> {props.value} </div>

  return (
	...some code
)

```
