import React from "react";
import {connect} from "react-redux";
import {plugins} from "griddle-react";
import _ from "underscore";

@connect((state, props) => {
  return {
    "rowData": plugins.LocalPlugin.selectors.rowDataSelector(state, props)
  };
})
class FriendsGrid extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const {rowData} = this.props;
    const avatar = _.sample(["elyse", "kristy", "matthew", "molly"]);
    return (
      <div className="card">
        <div className="image">
          <img src={"images/" + avatar +".png"}/>
        </div>
        <div className="content">
          <div className="header">
            {rowData.name + "(" + rowData.username + ")"}
          </div>
          <div className="meta">
            <a>{rowData.email}</a>
          </div>
          <div className="description">
            {rowData.address.suite + ", " + rowData.address.street +
              ", " + rowData.address.city + " - " + rowData.address.zipcode}
          </div>
        </div>
        <div className="extra content">
          <span className="right floated">
            {rowData.phone}
          </span>
          <span>
            <i className="cloud icon"/>
            {rowData.website}
          </span>
        </div>
      </div>
    );
  }
}

export default FriendsGrid;
