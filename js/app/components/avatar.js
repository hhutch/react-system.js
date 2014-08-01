/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({displayName: 'exports',
  render: function() {
    return (
      React.DOM.div({className: "Avatar johnny-boy"}, 
        React.DOM.img({className: "Avatar-img", src: this.props.imgSrc, alt: ""})
      )
    );
  }
});
