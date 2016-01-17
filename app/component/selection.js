import React from 'react';

export default React.createClass({

	componentDidMount(){
		var selections = document.querySelectorAll('.selection-item');
		var s = window.getSelection();
		var range = document.createRange();
		range.selectNode(selections[0]);
		range.setStart(selections[0],1);
		range.setEnd(selections[0],1);
		s.addRange(range);

		var inputs = $('.selection-input');
		inputs[0].setSelectionRange(2,5);
		//inputs.map(function(e) {e.setSelectionRange(2,5)});
		
		var items = $('.selection-item');
		items.mouseup(function(e){
			var range = window.getSelection().getRangeAt(0);
			var text ='';
			if(range.startContainer === range.endContainer){
				text = 'in one node, ';
			}
			text += ('selecion: '+range.startOffset+' '+range.endOffset);
			$('#selection-info').html(text);
		});
	},
	render(){
		return <div>
			<div id='selection-info'></div>
			<div className='selection-item'>this is window selection test1<input className='selection-input' value='this input selection test1!' /></div>
			<div className='selection-item'>this is window selection test2<input className='selection-input' value='this input selection test2!' /></div>
			<div className='selection-item'>this is window selection test3<input className='selection-input' value='this input selection test3!' /></div>
			<div className='selection-item'>this is window selection test4<input className='selection-input' value='this input selection test4!' /></div>
			<div className='selection-item'>this is window selection test5<input className='selection-input' value='this input selection test5!' /></div>
			<div className='selection-item'>this is window selection test6<input className='selection-input' value='this input selection test6!' /></div>
		</div>;
	}
});