import React, { Component } from 'react';
import CalendarHeader from 'components/Calendar/CalendarHeader';
import CalendarNav from 'components/Calendar/CalendarNav';
import { string, func } from 'prop-types';
import 'bulma-calendar/bulma-calendar.min.css';

class Calendar extends Component {
  constructor(props) {
    super(props);

    let currentDate = new Date();
    this.state = {
      selectedDate: null,
      currentMonth: currentDate.getMonth(),
      currentYear: currentDate.getFullYear()
    };

    this.previousMonth = this.previousMonth.bind(this);
    this.nextMonth = this.nextMonth.bind(this);
    this.selectDay = this.selectDay.bind(this);

  }

  static propTypes = {
    language: string,
    changeDate: func.isRequired
  };

  static defaultProps = {
    language: 'en'
  };

  previousMonth = (event) => {
    this.selectDay(null);
    if (this.state.currentMonth === 0)  {
      this.setState({
        currentYear: this.state.currentYear-1,
        currentMonth: 11
      });
    } else {
      this.setState({
        currentMonth: this.state.currentMonth-1
      });
    }
  }

  nextMonth = (event) => {
    this.selectDay(null);
    if (this.state.currentMonth === 11)  {
      this.setState({
        currentYear: this.state.currentYear+1,
        currentMonth: 0
      });
    } else {
      this.setState({
        currentMonth: this.state.currentMonth+1
      });
    }
  }

  selectDay = (day) => {
    if (day) {
      this.setState({
        selectedDate: day
      });
      let newDate = new Date(this.state.currentYear, this.state.currentMonth, day);
      this.props.changeDate(newDate);
    } else {
      this.setState({
        selectedDate: null
      });
      this.props.changeDate(null);
    }

  }

  getWeekDays = (weekDays, weekStart) => {
    for (let i=0; i<weekStart;i++) {
      weekDays.push(weekDays.shift());
    }
    return weekDays;
  }

  daysInPreviousMonth = (month, year) => {
    return this.daysInMonth(month-1, year);
  }

  daysInMonth = (month,year) => {
    return new Date(year, month+1, 0).getDate();
  }

  render() {
    const { language } = this.props;
    let currentLanguage = this.getLanguage(language);
    let currentYear = this.state.currentYear;
    let currentMonth = this.state.currentMonth;
    let currentDay = new Date(currentYear, currentMonth,1).getDay();
    let previousMonth = this.daysInPreviousMonth(currentMonth,currentYear);
    let lastDay = new Date(currentYear, currentMonth,this.daysInMonth(currentMonth,currentYear)).getDay();
    let daysInMonth = this.daysInMonth(currentMonth,currentYear);
    let currentMonthString = currentLanguage.months[currentMonth];
    let currentWeekdays = this.getWeekDays(currentLanguage.weekdaysShort,currentLanguage.weekStart);
    let previousDays = [];
    let currentDays = [];
    let nextDays = [];

    for (let i=1; i<= daysInMonth;i++) {

      if (currentDay) {
        currentDay--;
        previousDays.push(previousMonth-currentDay);
      }

      currentDays.push(i);

      if (lastDay < 6) {
        nextDays.push(i);
        lastDay++;
      }
    }

    return(
      <div className="calendar">
        <CalendarNav
          month={currentMonthString}
          year={currentYear}
          nextMonth={this.nextMonth}
          previousMonth={this.previousMonth}
        />
        <div className="calendar-container">
          <CalendarHeader weekdays={currentWeekdays}/>
          <div className="calendar-body">
            {previousDays.map( (day) =>
              <div
                className="calendar-date is-disabled"
                key={"prev"+day}
                onClick={this.previousMonth}>
                <button className="date-item">{day}</button>
              </div>
            )}

            {currentDays.map( (day) =>
              <div
                className="calendar-date"
                key={"curr"+day}
                onClick={() => this.selectDay(day)}
              >
                <button
                  className={day === this.state.selectedDate ? "date-item is-active" : "date-item"}>{day}</button>
              </div>
            )}

            {nextDays.map( (day) =>
              <div
                className="calendar-date is-disabled"
                key={"next"+day}
                onClick={this.nextMonth}
              >
                <button className="date-item">{day}</button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  getLanguage = (language) => {
    const languages = {
      en: {
        weekStart: 0,
        previousMonth: 'Previous Month',
        nextMonth: 'Next Month',
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      }
    };
    return languages[language];
  }


}

export default Calendar;
