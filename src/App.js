import Route from "./components/Route";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import AccordionPage from "./pages/AccordionPage";
import ButtonPage from "./pages/ButtonPage";
import CounterPage from "./pages/CounterPage";
import DropdownPage from "./pages/DropdownPage";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
const App = () => {
	return (
		<div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
			<Sidebar/>
			<div className="col-span-5">
				<Route path="/">
					<HomePage />
				</Route>
				<Route path="/accordion">
					<AccordionPage />
				</Route>
				<Route path="/button">
					<ButtonPage />
				</Route>
				<Route path="/counter">
					<CounterPage initialCount={0} />
				</Route>
				<Route path="/dropdown">
					<DropdownPage />
				</Route>
				<Route path="/modal">
					<ModalPage />
				</Route>
				<Route path="/table">
					<TablePage />
				</Route>
			</div>
		</div>
	);
}

export default App;
