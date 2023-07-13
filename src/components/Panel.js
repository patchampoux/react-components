import classNames from "classnames";
import { twMerge } from 'tailwind-merge';

const Panel = ({children, className, ...rest}) => {
	const classes = twMerge(classNames(
		'border rounded p-3 shadow bg-white w-full',
		className
	));

	return <div {...rest} className={classes}>{children}</div>
}

export default Panel;
