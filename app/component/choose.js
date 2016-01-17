import React from 'react';

export default React.createClass({

	componentDidMount(){

	},
	render(){
		let style = {
			display:'inline-block',
			width: '20px',
			height: '20px',
			backgroundColor:'red',
		};
		return <div>
			<a className="btn btn-primary" role="button" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
			  Link with href
			</a>
			<button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
			  Button with data-target
			</button>
			<div className="collapse" id="collapseExample">
			  <div className="well">
			    <h2>hahah</h2>
			    <h2>hahah</h2>
			    <h2>hahah</h2>
			    <h2>hahah</h2>
			  </div>
			</div>
		</div>;
	}
});