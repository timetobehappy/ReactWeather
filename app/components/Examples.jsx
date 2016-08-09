var React = require('react');

// var Examples = React.createClass({
//   render: function() {
//     return (
//       <h2>Examples Component</h2>
//     );
//   }
// });

var Examples = (props) => {
  return (
    <h2>Examples Component!</h2>
    <p>Welcome to examples page!</p>
  );
};
module.exports = Examples;
