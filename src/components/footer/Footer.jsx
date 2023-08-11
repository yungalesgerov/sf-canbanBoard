import {LIST_TYPES} from "../../config";
import "./Footer.css";

function Footer(props) {
	const {tasks} = props;
    const listBaklog = tasks.filter(task => task.status === LIST_TYPES.BACKLOG);
	const listFinished = tasks.filter(task => task.status === LIST_TYPES.FINISHED);
	const elem = <div>
		               <span className= "count" >Active tasks: <span>{ `< ${listBaklog.length} >` }</span></span>
					   <span className= "count" >Finished tasks: <span>{ `< ${listFinished.length} >` }</span></span>
		         </div>
	
	return (
		<footer className= "footer">
			<div className= "counts">
				
				{elem}
					    
			</div>
			<div>Kanban board by {`< YUNG >, < 2023 >`}</div>
			
		</footer>
	);
}

export default Footer;