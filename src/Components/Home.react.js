import React from "react";

class Home extends React.Component {
  render () {
    return (
      <div className="webpack-ui-home">
        <div className="ui statistics">
          <div className="statistic">
            <div className="value">
              22
            </div>
            <div className="label">
              Saves
            </div>
          </div>
          <div className="statistic">
            <div className="text value">
              Three<br/>
              Thousand
            </div>
            <div className="label">
              Signups
            </div>
          </div>
          <div className="statistic">
            <div className="value">
              <i className="plane icon"/> 5
            </div>
            <div className="label">
              Flights
            </div>
          </div>
          <div className="statistic">
            <div className="value">
              <img src="images/avatar.jpg" className="ui circular inline image"/>
              42
            </div>
            <div className="label">
              Team Members
            </div>
          </div>
        </div>
        <div className="ui vertical masthead center aligned segment">
          <div className="ui text container">
            <h1 className="ui header">
              Semantic-ui Showcase
            </h1>
            <h2>
              Built with Webpack, Gulp, Bower, React, Redux.
            </h2>
            <div className="ui huge primary button">
              Get Started
              <i className="right arrow icon"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
