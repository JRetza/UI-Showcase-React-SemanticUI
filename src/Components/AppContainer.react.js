import React from "react";
import Header from "./Header";

class AppContainer extends React.Component {
  render() {
    return (
      <div className="webpack-ui">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default AppContainer;
