import {useState} from "react";
import "./FormAddNewTask.css";

const FormAddNewTask = props => {
	const {addNewTask, setFormVisible } = props;
	const [values, setValues] = useState({
		title: "",
		description: "",
	});

	const handleChange = e => {
		
		const fieldName = e.target.name;
		setValues({...values, [fieldName]: e.target.value});
		
	};
	
	const handleSubmit = e => {
		
		e.preventDefault();
		if (values.title) {
			addNewTask(values.title, values.description, "backlog");
			
		}
		setFormVisible(false);
	};
	 
	return (
		<form onSubmit={handleSubmit} className= "form">
			<input className= "input" id='taskTitle' name='title' type='text' placeholder= '_____________________________________' onChange={handleChange} value={values.title} />
			
			<button className= "submit" type='submit'>Submit</button>
		</form>
	);
};

export default FormAddNewTask;
