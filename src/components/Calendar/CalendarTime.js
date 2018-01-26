import React, { Component } from 'react';
import { func } from 'prop-types';
import 'bulma-divider/bulma-divider.min.css';
import 'bulma-slider/bulma-slider.min.css';

class CalendarTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 48,
      hour: 12,
      minute: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.props.changeTime(this.state.hour,this.state.minute);
  }
  static propTypes = {
    changeTime: func
  };

  static defaultProps = {
  }

  doubleDigit = (n) => {
    return n > 9 ? "" + n: "0" + n;
  }

  handleChange = (event) =>  {
    let value = event.target.value;
    let hour = Math.floor(value / 4);
    let minute = value%4*15;
    this.props.changeTime(hour,minute);
    this.setState({ value, hour, minute });
  }

  render() {
    return(
      <React.Fragment>
        <div className="is-divider" data-content="TIME" />
        <h1 className="title is-1">{this.state.hour}:{this.doubleDigit(this.state.minute)}</h1>
        <input
          className="slider is-fullwidth is-primary"
          step="1"
          min="0"
          max="96"
          value={this.state.value}
          type="range"
          onChange={this.handleChange}
        />
      </React.Fragment>
    );
  }
}

export default CalendarTime;
