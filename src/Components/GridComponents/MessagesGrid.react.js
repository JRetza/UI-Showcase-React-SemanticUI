import React from "react";
import {connect} from "react-redux";
import {plugins} from "griddle-react";
import _ from "underscore";

@connect((state, props) => {
  return {
    "rowData": plugins.LocalPlugin.selectors.rowDataSelector(state, props)
  };
})
class MessagesGrid extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const {rowData} = this.props;
    const avatar = _.sample(["elyse", "kristy", "matthew", "molly"]);
    return (
      <div className="ui comments">
        <div className="comment">
          <a className="avatar">
            <img src={"/images/" + avatar + ".png"}/>
          </a>
          <div className="content">
            <a className="author">{rowData.email}</a>
            <div className="text">{rowData.body}</div>
            <div className="actions">
              <a className="reply">Reply</a>
              <a className="hide">Delete</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MessagesGrid;
