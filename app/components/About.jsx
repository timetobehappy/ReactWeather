var React = require('react');

// var About = React.createClass({
//   render: function() {
//     return (
//       <h2>About Component</h2>
//     );
//   }
// });

//Presentational component that simply renders and doesn't manage any state, you can use a stateless
//functional component

var About = (props) => {
  return (
    <h2>About Component</h2>
  );
};


module.exports = About;
