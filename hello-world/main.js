var React = require('react')
var ReactDOM = require('react-dom')

var Hello = React.createClass({
	render: function() {
		return (
			<div>
			  <h1>Hello, react!</h1>
				<p>That's awesome</p>
			</div>
		)
	}
})

ReactDOM.render(
	<Hello />,
  document.getElementById('app')
)
