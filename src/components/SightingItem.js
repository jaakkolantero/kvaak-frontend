import React, { Component } from 'react';
import { string, number } from 'prop-types';
import moment from 'moment';

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
    let localDateTime = moment(dateTime).format("D.M.YYYY - HH:mm");
    return(
      <React.Fragment>
        <article>
          <p className="title">{species}
            <sup className="has-text-grey-light">
              {count} bird{count>1 ? 's':''}
            </sup>
          </p>
          <p className="is-small has-text-grey-light">
            {localDateTime}
          </p>
          <p className="subtitle">{description}</p>
        </article>
      </React.Fragment>
    );
  }
}

export default SightingItem;
