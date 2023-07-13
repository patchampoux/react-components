import Accordion from "../components/Accordion";

const AccordionPage = () => {
	const items = [
		{
			id: 0,
			label: 'Lorem ipsum',
			content: 'Dolor sit amet'
		},
		{
			id: 1,
			label: 'Lorem ipsum',
			content: 'Dolor sit amet'
		},
		{
			id: 2,
			label: 'Lorem ipsum',
			content: 'Dolor sit amet'
		}
	]

	return <Accordion items={items} />
}

export default AccordionPage;
