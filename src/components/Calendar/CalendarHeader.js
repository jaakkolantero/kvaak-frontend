import React, { Component } from 'react';
import { array } from 'prop-types'

class CalendarHeader extends Component {
  static propTypes = {
    weekdays: array
  };

  static defaultProps = {
    weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  }

  render() {
    const {
      weekdays
    } = this.props
    return(
      <div className="calendar-header">
        {weekdays.map( (weekday, i) =>
              <React.Fragment key={i}>
                <div className="calendar-date">{weekday}</div>
              </React.Fragment>
        )}
      </div>
    );
  }
}

export default CalendarHeader;
