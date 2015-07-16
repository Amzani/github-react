var React = require('react');
var NotesList = require('./NotesList');
var AddNote = require('./AddNote');

var Notes = React.createClass({
	propTypes: {
		 username: React.PropTypes.string.isRequired,
		 notes: React.PropTypes.array.isRequired,
		 addNote: React.PropTypes.func.isRequired
	},
	render: function() {
		return (
			<div>
				<h4>Notes for {this.props.username}</h4>
				<AddNote 
					username={this.props.username} 
					addNote={this.props.addNote} />
				<NotesList 
					username={this.props.username}
					notes={this.props.notes} />
			</div>
		);
	}
});

module.exports = Notes;