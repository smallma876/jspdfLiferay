import React from 'react';
import { jsPDF } from "jspdf";

export default class extends React.Component {

	componentDidMount(){
		
		const doc = new jsPDF();
 
		doc.text("Hello world!", 10, 10);
		doc.save("a4.pdf");
	}

	render() {
		return (
            <div>
				<div>
        	        <span className="tag">Portlet Namespace:</span> 
					<span className="value">{this.props.portletNamespace}</span>
				</div>
				<div>
    	            <span className="tag">Context Path:</span>
					<span className="value">{this.props.contextPath}</span>
				</div>
				<div>
	                <span className="tag">Portlet Element Id:</span>
					<span className="value">{this.props.portletElementId}</span>
				</div>
				
				<div>
					<span className="tag">Configuration:</span>
					<span className="value pre">{JSON.stringify(this.props.configuration, null, 2)}</span>
				</div>
				{/* <App /> */}
			</div>
		);
	}	
}