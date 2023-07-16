import useCounter from "../hooks/use-counter";
import Button from "../components/Button";

const CounterPage = ({initialCount}) => {
	const {count, handleClick} = useCounter(initialCount);

	return (
		<div>
			<h1>Count is: {count}</h1>
			<Button onClick={handleClick} primary>Increment</Button>
		</div>
	);
}

export default CounterPage;
