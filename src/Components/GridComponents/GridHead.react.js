import React from "react";
import PropTypes from "prop-types";

class GridHead extends React.Component {
  static contextTypes = {
    components: PropTypes.object
  };

  render() {
    return (<this.context.components.TableBody />);
  }
}

export default GridHead;
