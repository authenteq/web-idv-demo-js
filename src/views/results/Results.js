import React from 'react';
import './Results.scss';

import Details from '../../components/details/Details';
import axios from 'axios';
import queryString from 'query-string'

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: null
    }
  }

  componentDidMount() {
    const parsed = queryString.parse(this.props.location.search);
    const code = parsed.code;

    var config = {
      method: 'get',
      url: `http://localhost:8888/results?code=${code}`,
    };

    axios(config).then(response => {
      this.setState({
        details: response.data.documentData,
      });
    });
  }

  dataUrl(imageObject) {
    const { contentType, content } = imageObject;
    return `data:${contentType};base64,${content}`;
  }

  renderDocument(imageObject, alt) {
    return (
      <div className="Results-imageContainer">
        <div className="Results-imageContainer">
          <img className="Results-image" src={this.dataUrl(imageObject)} alt={alt}/>
        </div>
      </div>
    )
  }

  renderResults(details) {
    return (
      <div className="Results-panel">
        <h1 className="Results-header">Verification Results</h1>
        <div className="Results-documents">
          { details.croppedFrontImage && this.renderDocument(details.croppedFrontImage, "Document Front") }
          { details.croppedBackImage && this.renderDocument(details.croppedBackImage, "Document Back") }
        </div>
        <Details details={details} />
        <div className="Results-buttonContainer">
          <a className="Results-button" href="/">Back to Demo</a>
        </div>
      </div>
    )
  }

  render() {
    const { details } = this.state;
    return (
      <div className="Results">
        { details && this.renderResults(details) }
        { !details && "Loading..." }
      </div>
    );
  }
}

export default Results;
