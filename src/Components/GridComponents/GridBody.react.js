import React from "react";

class GridBody extends React.Component {
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

export default GridBody;
