import Link from "./Link";

const Sidebar = () => {
	const links = [
		{
			label: 'Home',
			path: '/'
		},
		{
			label: 'Accordion',
			path: '/accordion'
		},
		{
			label: 'Button',
			path: '/button'
		},
		{
			label: 'Dropdown',
			path: '/dropdown'
		},
		{
			label: 'Modal',
			path: '/modal'
		}
	];

	const renderedLinks = links.map((link) => {
		return <Link className="mb-3" activeClassName="border-l-4 border-blue-500 pl-2 font-bold hover:border-blue-700" key={link.label} to={link.path}>{link.label}</Link>
	});

	return (
		<div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
			{renderedLinks}
		</div>
	);
}

export default Sidebar;
