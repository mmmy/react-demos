require('./less/main.less');
require('./less/d3-container.less');
require('bootstrap/dist/css/bootstrap.min.css');
import React from 'react';
//import ReactDatagrid from './component/react-datagrid';
import $ from 'jquery';
window.$ = window.jQuery = $;
//注册插件
require('bootstrap');
require('jquery.terminal');
///////////
//config //
///////////
let tabsArr = [
	{title:'react-datagrid',component:'./component/react-datagrid'},
	{title:'boostrap',component:'./component/bootstrap'},
	{title:'animations',component:'./component/animations'},
	{title:'terminal',component:'./component/terminal'},
	{title:'widgets',component:'./component/widgets'},
	{title:'d3',component:'./component/d3'},
	{title:'window.selection',component:'./component/selection'},
	{title:'choose',component:'./component/choose'},
	{title:'fixedDataTable',component:'./component/fixedDataTable'},
	];



let Main = React.createClass({
	getInitialState(){
		return {current:(<h3>请选择</h3>),index:-1};
	},
	handleSelectComponent(index){
		require.ensure([], () => {
			let data = this.props.data;
			let Current = require(data[index].component);
			this.setState({index:index,current:<Current />});
		});
	},

	render(){
		let data = this.props.data;
		let tabNodes = [];
		let that = this;
		tabNodes = data.map(function(e,i){
			return <span className={'tab'+(that.state.index==i?' selected':'')} onClick={that.handleSelectComponent.bind(that,i)}>{e.title}</span>;
		});
		//let DataGrid = require(data[this.state.index].component);
		return <div className='main'>
			<div>
				{tabNodes}
			</div>
			<hr/>
			{this.state.current}
		</div>;
	}
});



React.render(<Main data={tabsArr}/>, document.getElementById('app'));
