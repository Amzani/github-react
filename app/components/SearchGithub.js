var React = require('react');
var Router = require('react-router');

var SearchGithub = React.createClass({
	mixins : [Router.Navigation],
	handleSubmit: function() {
		var username = this.refs.username.getDOMNode().value;
		this.refs.username.getDOMNode().value = '';
		this.transitionTo('profile', {'username': username});
	},
	render: function() {
		return (
			<div className="row">
				<form onSubmit={this.handleSubmit}>
					<div className="form-group col-md-8">
						<input type="text" className="form-control" ref="username" placeholder="Github username"/>
					</div>
					<div className="form-group col-md-4">
						<button type="submit" className="btn btn-block btn-primary">Search</button>
					</div>
				</form>
			</div>
		);
	}
});

module.exports = SearchGithub;