require('../less/dc.css');
require('../less/d3.css');
import React from 'react';

import d3 from 'd3';
window.d3 = d3;
import crossfilter from 'crossfilter';
window.crossfilter = crossfilter;
let dc = require('../lib/dc');
window.dc = dc;

var data = [
	{letter:'A', value:0.08167},
	{letter:'B', value:0.01492},
	{letter:'C', value:0.02780},
	{letter:'D', value:0.04253},
	{letter:'E', value:0.12702},
	{letter:'F', value:0.02288},
	{letter:'G', value:0.02022},
	{letter:'H', value:0.06094},
	{letter:'I', value:0.06973},
	{letter:'J', value:0.00153},
	{letter:'K', value:0.00747},
	{letter:'L', value:0.04025},
	{letter:'M', value:0.02517},
	{letter:'N', value:0.06749},
	{letter:'O', value:0.07507},
	{letter:'P', value:0.01929},
	{letter:'Q', value:0.00098},
	{letter:'R', value:0.05987},
	{letter:'S', value:0.06333},
	{letter:'T', value:0.09056},
	{letter:'U', value:0.02758},
	{letter:'V', value:0.01037},
	{letter:'W', value:0.02465},
	{letter:'X', value:0.00150},
	{letter:'Y', value:0.01971},
	{letter:'Z', value:0.00074},
];

var margin = {top:20, right:30, bottom:30, left:40};
var width = 800 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;
 export default React.createClass({
 	componentDidMount(){
 		var x = d3.scale.ordinal().rangeRoundBands([0, width], .1);
 		var y = d3.scale.linear().range([height,0]);
 		var chart = d3.select('.d3-container .chart').attr('width',width+margin.right+margin.left).attr('height',height+margin.top+margin.bottom)
 					.append('g').attr('transform','translate('+margin.left + ',' + margin.top +')');
 		x.domain(data.map(function(d){ return d.letter; }));
 		y.domain([0, d3.max(data, function(d){return d.value;})]);
 		var barWidth = width / data.length;

 		var bar = chart.selectAll('g').data(data).enter().append('g').attr('transform',function(d,i){return 'translate(' + x(d.letter) + ',0)';});

 		bar.append('rect').attr('y', function(d){return y(d.value);})
 							.attr('height', function(d){ return height - y(d.value); })
 							.attr('width', x.rangeBand());

 		bar.append('text').attr('x', barWidth / 2)
 							.attr('y', function(d){ return y(d.value) + 3 ;})
 							.attr('dy', '.75em')
 							.text(function(d){ return d.value; });

 		//adding axes
 		var xAxis = d3.svg.axis().scale(x).orient('bottom');
 		var yAxis = d3.svg.axis().scale(y).orient('left').ticks(10,'%');
 		chart.append('g').attr('class', 'x axis').attr('transform', 'translate(0,' + height +')').call(xAxis);
 		chart.append('g').attr('class', 'y axis').attr('transform', 'translate(0, 0)').call(yAxis).
 		append('text').attr('transform','rotate(-90)').attr('dy','.71em').attr('y', 6).style('text-anchor','end').text('Frequency');
 	

 		this.renderDC();
 	},
 	renderDC(){
 		d3.json('jsonfile/report-trades.json',function(json){
 			console.log(json);
 			json.forEach(function(e){
 				e.openDate *=1000;
 				e.endDate *=1000;
 			});
 			let data = crossfilter(json);
 			//日期
 			let openDate = data.dimension(function(d){ return new Date(d.openDate) }),
 				groupByOpenDate = openDate.group();
 			//sid
 			let sid = data.dimension(function(d){ return d.sid }),
 				groupBySid = sid.group(),
 				profitBySid = sid.group().reduceSum(function(d){return d.profit});

 			dc.barChart('#dc-opentime-demension')
 				.width(1000)
 				.height(300)
 				.dimension(openDate)
 				.group(groupByOpenDate)
 				.x(d3.time.scale().domain([new Date('2000-01-01'), new Date('2010-12-12')]))
 				.y(d3.scale.linear().domain([0,20]))
 				.centerBar(true);

 			dc.pieChart('#dc-sid-demension')
 				.width(500)
 				.height(500)
 				.dimension(sid)
 				.group(groupBySid)
 				//.radius(500)
 				//.innerRadius(1000)
 			dc.rowChart('#dc-sidrow-demension')
 				.width(500)
 				.height(3000)
 				.dimension(sid)
 				.group(groupBySid)
 				//.ordinalColors(['#3182bd', '#6baed6', '#9ecae1', '#c6dbef', '#dadaeb'])
 				.elasticX(true)
 				.xAxis().ticks(4);
 			dc.rowChart('#dc-sidprofit-demension')
 				.width(500)
 				.height(3000)
 				.dimension(sid)
 				.group(profitBySid)
 				//.ordinalColors(['#3182bd', '#6baed6', '#9ecae1', '#c6dbef', '#dadaeb'])
 				.elasticX(true)
 				.xAxis().ticks(4);


 			dc.renderAll();
 			debugger;
 		});
 	},
 	render(){
 		return <div>
 			<div className='d3-container'>
 				<svg className="chart"></svg>
 			</div>
 			<svg width='300' height='200' version="1.1" baseProfile='full' xmlns="http://www.w3.org/2000/svg">
 				<rect width='100%' height='100%' fill='red' />
 				<circle cx='150' cy='100' r='80' fill='green' />
 				<text x='150' y='125' font-size='60' text-anchor='middle' fill='white'>SVG</text>
 				<path d='M10 10 H90 V90 Z' />
 			</svg>
 			<svg>
 				<path d='M10 10 C 20 20, 40 20, 50,10' stroke='black' fill='transparent'/>
 				<polyline points="40 60 80 20 120 60" stroke="black" stroke-width="20"
			      stroke-linecap="butt" fill="none" stroke-linejoin="miter"/>
			  
			  <polyline points="40 140 80 100 120 140" stroke="black" stroke-width="20"
			      stroke-linecap="round" fill="none" stroke-linejoin="round"/>
			  
			  <polyline points="40 220 80 180 120 220" stroke="black" stroke-width="20"
			      stroke-linecap="square" fill="none" stroke-linejoin="bevel"/>
 			</svg>

 			<div id='dc-opentime-demension'>
 			</div>
 			<div id='dc-sid-demension'>
 			</div>
 			<div id='dc-sidrow-demension' style={{maxHeight:500,overflow:'scroll'}}>
 			</div>
 			<div id='dc-sidprofit-demension' style={{maxHeight:500,overflow:'scroll'}}>
 			</div>
 		</div>;
 	}
 });