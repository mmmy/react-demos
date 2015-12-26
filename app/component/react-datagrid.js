import React from 'react';
import DataGrid from 'react-datagrid';
require('react-datagrid/index.css');

var data = [
  { id: '1', firstName: 'John', lastName: 'Bobson'},
  { id: '2', firstName: 'Bob', lastName: 'Mclaren'}
]
var columns = [
  { name: 'firstName'},
  { name: 'lastName'}
]

export default React.createClass({
	render(){
		return <DataGrid idProperty="id" dataSource={data} columns={columns} />;
	}
});