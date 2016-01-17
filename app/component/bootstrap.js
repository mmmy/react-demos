import React from 'react';

//$(function () {
  $('[data-toggle="tooltip"]').tooltip();
//});
//$(function () {
  $('[data-toggle="popover"]').popover()
//});
export default React.createClass({
	render(){
		return <div style={{border:'1px solid #aaa'}} className='container-fluid'>
					<div className="row">
					  <div className="col-md-1">.col-md-1</div>
					  <div className="col-md-1">.col-md-1</div>
					  <div className="col-md-1">.col-md-1</div>
					  <div className="col-md-1">.col-md-1</div>
					  <div className="col-md-1">.col-md-1</div>
					  <div className="col-md-1">.col-md-1</div>
					  <div className="col-md-1">.col-md-1</div>
					  <div className="col-md-1">.col-md-1</div>
					  <div className="col-md-1">.col-md-1</div>
					  <div className="col-md-1">.col-md-1</div>
					  <div className="col-md-1">.col-md-1</div>
					  <div className="col-md-1">.col-md-1</div>
					</div>
					<div className="row">
					  <div className="col-md-8">.col-md-8</div>
					  <div className="col-md-4">.col-md-4</div>
					</div>
					<div className="row">
					  <div className="col-md-4">.col-md-4</div>
					  <div className="col-md-4">.col-md-4</div>
					  <div className="col-md-4">.col-md-4</div>
					</div>
					<div className="row">
					  <div className="col-md-6">.col-md-6</div>
					  <div className="col-md-6">.col-md-6</div>
					</div>


					<div className="row">
					  <div className="col-xs-12 col-md-8">.col-xs-12 .col-md-8</div>
					  <div className="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
					</div>

					<div className="row">
					  <div className="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
					  <div className="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
					  <div className="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
					</div>

					<div className="row">
					  <div className="col-xs-6">.col-xs-6</div>
					  <div className="col-xs-6">.col-xs-6</div>
					</div>


					<h1>h1. Bootstrap heading <small>Secondary text</small></h1>
					<h2>h2. Bootstrap heading <small>Secondary text</small></h2>
					<h3>h3. Bootstrap heading <small>Secondary text</small></h3>
					<h4>h4. Bootstrap heading <small>Secondary text</small></h4>
					<h5>h5. Bootstrap heading <small>Secondary text</small></h5>
					<h6>h6. Bootstrap heading <small>Secondary text</small></h6>
					<s>This line of text is meant to be treated as no longer accurate.</s>
				
					<p className="text-lowercase">Lowercased text.</p>
					<p className="text-uppercase">Uppercased text.</p>
					<p className="text-capitalize">Capitalized text.</p>
				
					<kbd>cd</kbd> 
					
					<form>
					  <div className="form-group">
					    <label for="exampleInputEmail1">Email address</label>
					    <input type="email" className="form-control" />
					  </div>
					  <div className="form-group">
					    <label for="exampleInputPassword1">Password</label>
					    <input type="password" className="form-control"/>
					  </div>
					  <div className="form-group">
					    <label for="exampleInputFile">File input</label>
					    <input type="file"/>
					    <p className="help-block">Example block-level help text here.</p>
					  </div>
					  <div className="checkbox">
					    <label>
					      <input type="checkbox"/> Check me out
					    </label>
					  </div>
					  <button type="submit" className="btn btn-default">Submit</button>
					</form>
					<button type="button" className="btn btn-danger">（危险）Danger</button>
					<span className="glyphicon glyphicon-folder-open" aria-hidden={'true'}></span>
				
					<div className="dropdown">
					  <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
					    Dropdown
					    <span className="caret"></span>
					  </button>
					  <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
					    <li><a href="#">Action</a></li>
					    <li><a href="#">Another action</a></li>
					    <li><a href="#">Something else here</a></li>
					    <li><a href="#">Separated link</a></li>
					  </ul>
					</div>


					<div className="input-group">
					  <span className="input-group-addon">@</span>
					  <input type="text" className="form-control" placeholder="Username" aria-describedby="basic-addon1"/>
					</div>

					<div className="input-group">
					  <input type="text" className="form-control" placeholder="Recipient's username" aria-describedby="basic-addon2"/>
					  <span className="input-group-addon">@example.com</span>
					</div>

					<div className="input-group">
					  <span className="input-group-addon">$</span>
					  <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)"/>
					  <span className="input-group-addon">.00</span>
					</div>

					<ul className="nav nav-tabs">
					  <li role="presentation" className="active"><a href="#">Home</a></li>
					  <li role="presentation"><a href="#">Profile</a></li>
					  <li role="presentation"><a href="#">Messages</a></li>
					</ul>
					<div className='row'>
						<div className='col-xs-2'>
							<div className="progress">
							  <div className="progress-bar progress-bar-striped active" role="progressbar"  style={{width: '100%'}}>
							    100%
							  </div>
							</div>
						</div>
						<div className='col-xs-8'></div>
					</div>



					<button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
					  Launch demo modal
					</button>

					<div className="modal fade" id="myModal" tabindex="-1" id="myModal" role="dialog" aria-labelledby="myModalLabel">
					  <div className="modal-dialog" role="document">
					    <div className="modal-content">
					      <div className="modal-header">
					        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					        <h4 className="modal-title">Modal title</h4>
					      </div>
					      <div className="modal-body">
					        ...
					      </div>
					      <div className="modal-footer">
					        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
					        <button type="button" className="btn btn-primary">Save changes</button>
					      </div>
					    </div>
					  </div>
					</div>	

					<button type="button" className="btn btn-default" data-toggle={"tooltip"} data-placement={"left"} title="Tooltip on left">Tooltip on left</button>

					<button type="button" className="btn btn-default" data-toggle={"tooltip"} data-placement={"top"} title={"Tooltip on top"}>Tooltip on top</button>

					<button type="button" className="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">Tooltip on bottom</button>

					<button type="button" className="btn btn-default" data-toggle="tooltip" data-placement="right" title="Tooltip on right">Tooltip on right</button>


					<button type="button" className="btn btn-lg btn-danger" data-toggle="popover" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">点我弹出/隐藏弹出框</button>

				</div>;
	}
});