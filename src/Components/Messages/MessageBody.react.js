import React from "react";

class MessageBody extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const {rowIds, style, className, Row} = this.props;
    return (
      <div style={style} className={className}>
        { rowIds && rowIds.map(r => <Row key={r} griddleKey={r} />) }
      </div>
    );
  }
}

export default MessageBody;
