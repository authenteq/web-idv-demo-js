import React from 'react';
import './AQButton.scss';
import logo from './authenteq-logo.png';

class AQButton extends React.Component {
  render() {
    return (
      <a className="AQButton" href={this.props.link}>
        <img className='AQButton-logo' src={logo} alt="Authenteq Logo" />
        <div className='AQButton-caption'>Verify with Authenteq Web IDV</div>
      </a>
    )
  }
}

export default AQButton;
