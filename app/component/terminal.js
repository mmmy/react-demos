import React from 'react';
import $ from 'jquery';

require('jquery.terminal/css/jquery.terminal.css');
export default React.createClass({
	componentDidMount(){
		
		let terminal  = $('#terminal_div').terminal(function(cmd, term){
			if(cmd=='help'){
				term.echo('this is help');
			}
		},{
			width: 600,
			height: 600,
			completion :['help','terminal']
		});

	},
	render(){
		return <div>
			<div id='terminal_div'></div>
		</div>;
	}
});