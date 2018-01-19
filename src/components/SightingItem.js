import React, { Component } from 'react';
import { string, number } from 'prop-types'

class SightingItem extends Component {
  static propTypes = {
    species: string,
    count: number,
    dateTime: string,
    description: string
  };

  static defaultProps = {
    species: "bird",
    count: 1,
    dateTime: "2012-03-19T07:22Z",
    description: "This is default description."
  }
  
  render() {
    const {
      species,
      count,
      dateTime,
      description
    } = this.props
    return(
      <React.Fragment>
        <article>
          {/*TODO: ADD TOOLTIP npm install react-tooltip for bird count */}
          <p className="title">{species} <sup className="has-text-grey-light">{count} birds</sup></p>
          <p className="is-small has-text-grey-light">
            <span className="has-text-grey-dark">ufox</span>
            <span> - {dateTime}</span></p>
          <p className="subtitle">{description}</p>
        </article>
      </React.Fragment>
    );
  }
}

export default SightingItem;
