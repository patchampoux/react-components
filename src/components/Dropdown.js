import {useState, useEffect, useRef} from "react";
import {GoChevronUp, GoChevronDown} from "react-icons/go";
import Panel from "./Panel";

const Dropdown = ({defaultText, options, value, onChange}) => {
	const [isOpen, setIsOpen] = useState(false);
	const icon = <span className="text-2xl">{isOpen ? <GoChevronUp /> : <GoChevronDown />}</span>;
	const divEl = useRef();

	useEffect(() => {
		const handler = (e) => {
			if (!divEl.current) {
				return;
			}

			if (!divEl.current.contains(e.target)) {
				setIsOpen(false);
			}
		};

		document.addEventListener('click', handler, true);

		return () => {
			document.removeEventListener('click', handler);
		};
	}, []);

	const handleClick = () => {
		setIsOpen((current) => !current);
	}

	const handleOptionClick = (e, option) => {
		e.stopPropagation();

		setIsOpen(false);

		onChange(option);
	}

	const renderedOptions = options.map((option) => {
		return (
			<div className="hover:bg-sky-100 rounded cursor-pointer p-1" key={option.value} onClick={(e) => handleOptionClick(e, option)}>
				{option.label}
			</div>
		);
	});

	return (
		<div className="w-48 relative" ref={divEl} onClick={handleClick}>
			<Panel className="flex justify-between items-center cursor-pointer select-none">{value?.label || defaultText}{icon}</Panel>
			{isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
		</div>
	);
}

export default Dropdown;
