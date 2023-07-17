import {produce} from "immer";
import {useReducer, useId} from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

const INCREMENT_COUNT = 'increment-count';
const DECREMENT_COUNT = 'decrement-count';
const SET_VALUE_TO_ADD = 'set-value-to-add';
const ADD_VALUE_TO_COUNT = 'add-value-to-count';

const reducer = (state, action) => {
	switch (action.type) {
		case INCREMENT_COUNT:
			state.count = state.count + 1;
			return;
		case DECREMENT_COUNT:
			state.count = state.count - 1;
			return;
		case SET_VALUE_TO_ADD:
			state.valueToAdd = action.payload;
			return;
		case ADD_VALUE_TO_COUNT:
			state.count = state.count + state.valueToAdd;
			state.valueToAdd = 0;
			return;
		default:
			return;
	}
}

const CounterPage = ({initialCount}) => {
	const [state, dispatch] = useReducer(produce(reducer), {
		count: initialCount,
		valueToAdd: 0
	});

	const increment = () => {
		dispatch({
			type: INCREMENT_COUNT
		});
	}

	const decrement = () => {
		dispatch({
			type: DECREMENT_COUNT
		});
	}

	const handleChange = (e) => {
		const value = parseInt(e.target.value) || 0;

		dispatch({
			type: SET_VALUE_TO_ADD,
			payload: value
		});
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch({
			type: ADD_VALUE_TO_COUNT
		});
	}

	const lotInputId = useId();

	return (
		<Panel className="m-3">
			<h1 className="mb-3 text-lg">Count is: {state.count}</h1>
			<div className="flex flex-row">
				<Button className="mr-1.5" onClick={increment} primary>Increment</Button>
				<Button className="ml-1.5" onClick={decrement} primary>Decrement</Button>
			</div>
			<form className="flex items-center" onSubmit={handleSubmit}>
				<label htmlFor={lotInputId}>Add a lot:</label>
				<input className="p-1 m-3 bg-gray-50 border border-gray-300" type="number" id={lotInputId} name="lot-number" onChange={handleChange} value={state.valueToAdd || ''} />
				<Button>Add it!</Button>
			</form>
		</Panel>
	);
}

export default CounterPage;
