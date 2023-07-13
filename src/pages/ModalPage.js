import {useState} from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

const ModalPage = () => {
	const [showModal, setShowModal] = useState(false);

	const handleClick = () => {
		setShowModal((current) => !current);
	}

	const handleClose = () => {
		setShowModal(false);
	}

	const actionBar = (
		<div>
			<Button primary onClick={handleClose}>I accept</Button>
		</div>
	);

	const modal = <Modal onClose={handleClose} actionBar={actionBar}>
		<p>Here is an important agreement for you to accept.</p>
	</Modal>;

	return (
		<div>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a cursus nulla. Fusce quis dignissim quam. Aenean porta, mi nec iaculis varius, leo lectus porttitor felis, vitae pellentesque metus nibh eget sapien. Sed ut condimentum justo, a dictum ipsum. Integer in ipsum sapien. Maecenas porttitor sodales accumsan. Ut diam mauris, sollicitudin ac volutpat in, aliquet id mi. Proin et pellentesque sapien. Nam pharetra sit amet nibh a mollis. Sed lobortis euismod libero, sit amet laoreet magna luctus gravida. Quisque egestas at nunc sed rutrum. Praesent convallis quis ligula sed tincidunt. Nulla sit amet lacinia mauris, in tincidunt ex.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a cursus nulla. Fusce quis dignissim quam. Aenean porta, mi nec iaculis varius, leo lectus porttitor felis, vitae pellentesque metus nibh eget sapien. Sed ut condimentum justo, a dictum ipsum. Integer in ipsum sapien. Maecenas porttitor sodales accumsan. Ut diam mauris, sollicitudin ac volutpat in, aliquet id mi. Proin et pellentesque sapien. Nam pharetra sit amet nibh a mollis. Sed lobortis euismod libero, sit amet laoreet magna luctus gravida. Quisque egestas at nunc sed rutrum. Praesent convallis quis ligula sed tincidunt. Nulla sit amet lacinia mauris, in tincidunt ex.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a cursus nulla. Fusce quis dignissim quam. Aenean porta, mi nec iaculis varius, leo lectus porttitor felis, vitae pellentesque metus nibh eget sapien. Sed ut condimentum justo, a dictum ipsum. Integer in ipsum sapien. Maecenas porttitor sodales accumsan. Ut diam mauris, sollicitudin ac volutpat in, aliquet id mi. Proin et pellentesque sapien. Nam pharetra sit amet nibh a mollis. Sed lobortis euismod libero, sit amet laoreet magna luctus gravida. Quisque egestas at nunc sed rutrum. Praesent convallis quis ligula sed tincidunt. Nulla sit amet lacinia mauris, in tincidunt ex.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a cursus nulla. Fusce quis dignissim quam. Aenean porta, mi nec iaculis varius, leo lectus porttitor felis, vitae pellentesque metus nibh eget sapien. Sed ut condimentum justo, a dictum ipsum. Integer in ipsum sapien. Maecenas porttitor sodales accumsan. Ut diam mauris, sollicitudin ac volutpat in, aliquet id mi. Proin et pellentesque sapien. Nam pharetra sit amet nibh a mollis. Sed lobortis euismod libero, sit amet laoreet magna luctus gravida. Quisque egestas at nunc sed rutrum. Praesent convallis quis ligula sed tincidunt. Nulla sit amet lacinia mauris, in tincidunt ex.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a cursus nulla. Fusce quis dignissim quam. Aenean porta, mi nec iaculis varius, leo lectus porttitor felis, vitae pellentesque metus nibh eget sapien. Sed ut condimentum justo, a dictum ipsum. Integer in ipsum sapien. Maecenas porttitor sodales accumsan. Ut diam mauris, sollicitudin ac volutpat in, aliquet id mi. Proin et pellentesque sapien. Nam pharetra sit amet nibh a mollis. Sed lobortis euismod libero, sit amet laoreet magna luctus gravida. Quisque egestas at nunc sed rutrum. Praesent convallis quis ligula sed tincidunt. Nulla sit amet lacinia mauris, in tincidunt ex.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a cursus nulla. Fusce quis dignissim quam. Aenean porta, mi nec iaculis varius, leo lectus porttitor felis, vitae pellentesque metus nibh eget sapien. Sed ut condimentum justo, a dictum ipsum. Integer in ipsum sapien. Maecenas porttitor sodales accumsan. Ut diam mauris, sollicitudin ac volutpat in, aliquet id mi. Proin et pellentesque sapien. Nam pharetra sit amet nibh a mollis. Sed lobortis euismod libero, sit amet laoreet magna luctus gravida. Quisque egestas at nunc sed rutrum. Praesent convallis quis ligula sed tincidunt. Nulla sit amet lacinia mauris, in tincidunt ex.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a cursus nulla. Fusce quis dignissim quam. Aenean porta, mi nec iaculis varius, leo lectus porttitor felis, vitae pellentesque metus nibh eget sapien. Sed ut condimentum justo, a dictum ipsum. Integer in ipsum sapien. Maecenas porttitor sodales accumsan. Ut diam mauris, sollicitudin ac volutpat in, aliquet id mi. Proin et pellentesque sapien. Nam pharetra sit amet nibh a mollis. Sed lobortis euismod libero, sit amet laoreet magna luctus gravida. Quisque egestas at nunc sed rutrum. Praesent convallis quis ligula sed tincidunt. Nulla sit amet lacinia mauris, in tincidunt ex.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a cursus nulla. Fusce quis dignissim quam. Aenean porta, mi nec iaculis varius, leo lectus porttitor felis, vitae pellentesque metus nibh eget sapien. Sed ut condimentum justo, a dictum ipsum. Integer in ipsum sapien. Maecenas porttitor sodales accumsan. Ut diam mauris, sollicitudin ac volutpat in, aliquet id mi. Proin et pellentesque sapien. Nam pharetra sit amet nibh a mollis. Sed lobortis euismod libero, sit amet laoreet magna luctus gravida. Quisque egestas at nunc sed rutrum. Praesent convallis quis ligula sed tincidunt. Nulla sit amet lacinia mauris, in tincidunt ex.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a cursus nulla. Fusce quis dignissim quam. Aenean porta, mi nec iaculis varius, leo lectus porttitor felis, vitae pellentesque metus nibh eget sapien. Sed ut condimentum justo, a dictum ipsum. Integer in ipsum sapien. Maecenas porttitor sodales accumsan. Ut diam mauris, sollicitudin ac volutpat in, aliquet id mi. Proin et pellentesque sapien. Nam pharetra sit amet nibh a mollis. Sed lobortis euismod libero, sit amet laoreet magna luctus gravida. Quisque egestas at nunc sed rutrum. Praesent convallis quis ligula sed tincidunt. Nulla sit amet lacinia mauris, in tincidunt ex.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a cursus nulla. Fusce quis dignissim quam. Aenean porta, mi nec iaculis varius, leo lectus porttitor felis, vitae pellentesque metus nibh eget sapien. Sed ut condimentum justo, a dictum ipsum. Integer in ipsum sapien. Maecenas porttitor sodales accumsan. Ut diam mauris, sollicitudin ac volutpat in, aliquet id mi. Proin et pellentesque sapien. Nam pharetra sit amet nibh a mollis. Sed lobortis euismod libero, sit amet laoreet magna luctus gravida. Quisque egestas at nunc sed rutrum. Praesent convallis quis ligula sed tincidunt. Nulla sit amet lacinia mauris, in tincidunt ex.</p>
			<Button primary onClick={handleClick}>Open Modal</Button>
			{showModal && modal}
		</div>
	);
}

export default ModalPage;
