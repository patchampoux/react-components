import {useState} from "react";
import Dropdown from "./components/Dropdown";

const App = () => {
	const [value, setValue] = useState(null);

	const handleChange = (option) => {
		setValue(option);
	}

	const options = [
		{
			label: 'Red',
			value: 'red'
		},
		{
			label: 'Green',
			value: 'green'
		},
		{
			label: 'Blue',
			value: 'blue'
		}
	];

	return (
		<div>
			<Dropdown defaultText="Select..." options={options} value={value} onChange={handleChange} />
		</div>
	);
}

export default App;
