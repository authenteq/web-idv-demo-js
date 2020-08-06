import React from 'react';
import './Start.scss';
import AQButton from './../../components/aq-button/AQButton';

import axios from 'axios';

class Start extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      verificationUrl: null,
    }
  }

  componentDidMount() {
    var config = {
      method: 'get',
      url: 'http://localhost:8888/verification',
    };

    axios(config).then((response) => {
      console.log(response);
      this.setState({
        verificationUrl: response.data.verificationUrl
      })
    });
  }

  render() {
    const { verificationUrl } = this.state;

    return (
      <div className="Start">
        <div className="Start-description">This demo site allows you to experience the end-to-end flow of Authenteq’s Web Identity Verification.</div>
        <AQButton link={verificationUrl} />
      </div>
    );
  }
}

export default Start;
