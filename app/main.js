require('./less/main.less');
import React from 'react';
import ReactDatagrid from './component/react-datagrid';

///////////
//config //
///////////
let tabsArr = [{title:'react-datagrid',component:<ReactDatagrid />}];


let Tab = React.createClass({
	handleClick(){
		this.props.handSelect(this.props.index);
	},
	render(){
		return <span className={'tab'+(this.props.selected?' selected':'')} onClick={this.handleClick}>{this.props.title}</span>;
	}
});

let Main = React.createClass({
	getInitialState(){
		return {index:0};
	},
	handleSelectComponent(index){
		this.setState({index:index});
	},
	render(){
		let data = this.props.data;
		let tabNodes = [];
		let that = this;
		tabNodes = data.map(function(e,i){
			return <Tab title={e.title} index={i} handSelect={that.handleSelectComponent} selected={that.state.index==i} />;
		});
		let node = data[this.state.index].component;
		return <div className='main'>
			<div>{tabNodes}</div>
			<hr/>
			{node}
		</div>;
	}
});



React.render(<Main data={tabsArr}/>, document.getElementById('app'));
