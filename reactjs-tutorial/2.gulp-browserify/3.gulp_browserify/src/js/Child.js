var Child = React.createClass({
	getDefaultProps: function() {
		return {
			name: 'child'
		}
	},

  render: function() {
    return (
      <div>
        and this is the <b>{this.props.name}</b>.
      </div>
    )
  }
});

module.exports = Child
