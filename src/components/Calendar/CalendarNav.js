import React, { Component } from 'react';
import { func, number, string } from 'prop-types'

class CalendarNav extends Component {
  constructor(props) {
    super(props);
    this.onNextMonthClicked = this.onNextMonthClicked.bind(this);
    this.onPreviousMonthClicked = this.onPreviousMonthClicked.bind(this);
  }

  static propTypes = {
    nextMonth: func.isRequired,
    previousMonth: func.isRequired,
    month: string.isRequired,
    year: number.isRequired
  };

  static defaultProps = {
    month: "January",
    year: 2018
  }

  onNextMonthClicked = () => {
    this.props.nextMonth();
  }

  onPreviousMonthClicked = () => {
    this.props.previousMonth();
  }

  render() {
    const {
      month,
      year
    } = this.props

    return(
      <div className="calendar-nav">
        <div className="calendar-nav-left">
          <button className="button is-text" onClick={this.onPreviousMonthClicked}>
            <i className="fa fa-chevron-left"></i>
          </button>
        </div>
        <div>{month + " " + year}</div>
        <div className="calendar-nav-right">
          <button className="button is-text" onClick={this.onNextMonthClicked}>
            <i className="fa fa-chevron-right"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default CalendarNav;
