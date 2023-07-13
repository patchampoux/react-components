import ReactDom from "react-dom";
import {useEffect} from "react";

const Modal = ({children, onClose, actionBar}) => {
	useEffect(() => {
		document.body.classList.add('overflow-hidden');

		return () => {
			document.body.classList.remove('overflow-hidden');
		}
	}, []);

	return ReactDom.createPortal(
		<div>
			<div className="fixed inset-0 bg-gray-300 opacity-80 z-40" onClick={onClose}></div>
			<div className="fixed inset-40 p-10 bg-white z-50 flex flex-col justify-between">
				{children}
				<div className="flex justify-end">{actionBar}</div>
			</div>
		</div>,
		document.querySelector('.modal-container')
	);
}

export default Modal;
