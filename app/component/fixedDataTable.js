import React from 'react';
import {Table, Column, Cell} from 'fixed-data-table';
require('fixed-data-table/dist/fixed-data-table.css');

//import Resize from '../../node_modules/fixed-data-table/examples/SortExample.js';


class MyTextCell extends React.Component {
  render() {
    const {rowIndex, field, data, ...props} = this.props;
    return (
      <Cell {...props}>
        {data[rowIndex][field]}
      </Cell>
    );
  }
}

class MyLinkCell extends React.Component {
  render() {
    const {rowIndex, field, data, ...props} = this.props;
    const link = data[rowIndex][field];
    return (
      <Cell {...props}>
        <a href={link}>{link}</a>
      </Cell>
    );
  }
}



export default React.createClass({
	getInitialState(){
		return {
			myTableData:[
			       {name: 'Rylan', email: 'Angelita_Weimann42@gmail.com'},
			        {name: 'Amelia', email: 'Dexter.Trantow57@hotmail.com'},
			        {name: 'Estevan', email: 'Aimee7@hotmail.com'},
			        {name: 'Florence', email: 'Jarrod.Bernier13@yahoo.com'},
			        {name: 'Tressa', email: 'Yadira1@hotmail.com'},
			      ]
			};
	},
	render(){
		return <div>
			<Table
		    rowHeight={30}
		    rowsCount={this.state.myTableData.length}
		    width={800}
		    height={500}
		    headerHeight={50}>
		    <Column
			      header={<Cell>Name</Cell>}
			      cell={ <MyTextCell
	              data={this.state.myTableData}
	              field="name"
            	/>
        	}
		      width={200}
		    />
		 	<Column
		 		header={<Cell>Email</Cell>}
		    	cell={
		    		<MyLinkCell 
		    			data={this.state.myTableData}
		    			field='email'
		    		/>
		    	}
		    	width={200}
		    />
		  </Table>
		</div>;
	}
});