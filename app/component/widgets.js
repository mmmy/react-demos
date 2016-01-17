import React from 'react';
require('bootstrap-datepicker/dist/css/bootstrap-datepicker3.css');

export default React.createClass({
	getInitialState(){
		return {date:'2015/12/14'};
	},
	componentDidMount(){
		require('bootstrap-datepicker');
		let that = this;
		$(this.refs.datepicker).datepicker({
			format:'yyyy/mm/dd',
			autoclose: true,
		}).on('hide',function(jqEvent){
			console.log(jqEvent);
			//debugger;
			that.setState({date:jqEvent.format('yyyy/mm/dd')});
		});
	},
	dateChange(e){
		this.setState({date:e.target.value});
	},
	render(){
		return <div>
			<div><input value={this.state.date} onChange={this.dateChange} ref='datepicker'/></div>
			<div><input value={this.state.date} disabled/></div>
		</div>;
	}
});