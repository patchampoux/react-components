import classNames from "classnames";
import {twMerge} from "tailwind-merge";
import useNavigation from "../hooks/use-navigation";

const Link = ({to, children, className, activeClassName}) => {
	const {navigate, currentPath} = useNavigation();

	const classes = twMerge(classNames(
		'text-blue-500 underline hover:text-blue-700',
		className,
		currentPath === to && activeClassName
	));

	const handleClick = (e) => {
		if (e.metaKey || e.ctrlKey) {
			return;
		}

		e.preventDefault();

		navigate(to);
	}

	return <a className={classes} href={to} onClick={handleClick}>{children}</a>;
}

export default Link;
