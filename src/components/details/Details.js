import React from 'react';
import './Details.scss';

import countries from 'i18n-iso-countries';
import enLocale from 'i18n-iso-countries/langs/en.json';
countries.registerLocale(enLocale);

class Details extends React.Component {

  constructor() {
    super();
    this.labels = {
      'givenNames': 'Given Names',
      'surname': 'Surname',
      'namePrefixes': 'Name Prefixes',
      'nameSuffixes': 'Name Suffixes',

      'dateOfBirth': 'Date of Birth',
      'sex': 'Sex',
      'nationality': 'Nationality',

      'documentType': 'Document Type',
      'documentNumber': 'Document Number',
      'issuingCountry': 'Issuing Country',
      'dateOfExpiry': 'Date of Expiry',
      'dateOfIssue': 'Date of Issue',
    }

    this.order = [
      'givenNames',
      'surname',
      'namePrefixes',
      'nameSuffixes',

      'dateOfBirth',
      'sex',
      'nationality',

      'documentType',
      'documentNumber',
      'issuingCountry',
      'dateOfExpiry',
      'dateOfIssue',
    ]

    const documentTypes = {
      'PP': "Passport",
      'DL': "Driver's License",
      'NID': "National ID Card",
    }

    const sexes = {
      'M': 'Male',
      'F': 'Female',
      'X': 'Unspecified',
    }

    const identity = (x => x);
    const date = (x => new Date(x).toLocaleDateString("en-US"));
    const sex = (x => sexes[x]);
    const docType = (x => documentTypes[x]);
    const country = (x => countries.getName(x, "en"));

    this.formaters = {
      'givenNames': identity,
      'surname': identity,
      'namePrefixes': identity,
      'nameSuffixes': identity,

      'dateOfBirth': date,
      'sex': sex,
      'nationality': country,

      'documentType': docType,
      'documentNumber': identity,
      'issuingCountry': country,
      'dateOfExpiry': date,
      'dateOfIssue': date,
    }
  }

  renderProperties() {
    const details = this.props.details;
    const properites = this.order.filter(p => p in details);

    return properites.map((property) => {
      const formatter = this.formaters[property];
      return (
        <li key={property} className="Details-property">
          <div className="Details-name">{this.labels[property]}</div>
          <div className="Details-value">{formatter(details[property])}</div>
        </li>
      );
    });
  }


  render() {
    return (
      <ul className="Details">
        { this.renderProperties() }
      </ul>
    );
  }
}

export default Details;
