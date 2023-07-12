import Button from "./components/Button";
import {GoBell, GoCloud, GoDatabase} from "react-icons/go";

const App = () => {
	const handleClick = () => {
		console.log('clicked');
	}

	return (
		<div>
			<div>
				<Button className="mb-5" primary rounded onClick={handleClick}><GoBell />Click here!</Button>
			</div>
			<div>
				<Button secondary><GoCloud />Click here!</Button>
			</div>
			<div>
				<Button success outline><GoDatabase />Click here!</Button>
			</div>
			<div>
				<Button warning outline>Click here!</Button>
			</div>
			<div>
				<Button danger>Click here!</Button>
			</div>
		</div>
	);
}

export default App;
