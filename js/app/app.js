var React = require('react'),
    Avatar = require('components/avatar');

React.renderComponent(
    Avatar({imgSrc: "http://simonsmith.io/assets/images/me.jpg"}),
    document.body);
