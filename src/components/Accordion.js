import {useState} from "react";
import {GoChevronUp, GoChevronDown} from "react-icons/go";

const Accordion = ({items}) => {
	const [expandedIndex, setExpandedIndex] = useState(-1);

	const handleClick = (index) => {
		setExpandedIndex((current) => current !== index ? index : -1);
	}

	const renderedItems = items.map((item, index) => {
		const isExpanded = index === expandedIndex;
		const icon = <span className="text-2xl">{isExpanded ? <GoChevronUp /> : <GoChevronDown />}</span>;

		return (
			<div key={item.id}>
				<div className="flex justify-between items-center p-3 bg-gray-50 border-b  cursor-pointer" onClick={() => handleClick(index)}>
					{item.label}
					{icon}
				</div>
				{isExpanded && <div className="border-b p-5">{item.content}</div>}
			</div>
		);
	});

	return (
		<div className="border-x border-t rounded">
			{renderedItems}
		</div>
	);
}

export default Accordion;
