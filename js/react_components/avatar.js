/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="Avatar johnny-boy">
        <img className="Avatar-img" src={this.props.imgSrc} alt="" />
      </div>
    );
  }
});
