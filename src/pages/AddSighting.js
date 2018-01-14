import React, { Component } from 'react';
import * as Datetime from 'react-datetime';
import * as moment from 'moment'
import '../components/Datetime/datetime.css';
import './addsighting.css';

class AddSighting extends Component {
  constructor(props) {
    super(props);
    this.toggleActive = this.toggleActive.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleCount = this.handleCount.bind(this);

    this.state = {
        isActive: false,
        speciesArray: ["mallard", "redhead", "mockingbird", "duck", "gadwall", "canvasback"],

        species: '',
        count: 1,
        dateTime: '',
        description:'',
    };
  }

  toggleActive(event) {
    this.setState({ isActive: !this.state.isActive });
    event.preventDefault();
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleDateChange(event) {
    const value = moment(event, "YYYY-MM-DD[T]HH:mm:ss[Z]").toISOString();
    this.setState({
      dateTime: value
    });
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }



  handleCount(event) {
    event.preventDefault();
    var oldCount = this.state.count;
    var newValue = event.target.value;
    var newCount = newValue === "true" ? oldCount+1 : Math.max(oldCount-1,1);
    console.log(event.target.value);
    this.setState({
      count: newCount,
    });
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>

        <div className="field">
          <div className="control">
            <div className="select">
              <select name="species" value={this.state.species} onChange={this.handleInputChange}>
                { this.state.speciesArray.map( (bird, i) => {
                  return <option key={i} value={bird}>{bird}</option>;
                })}
              </select>
            </div>
          </div>
          <p className="help">Species</p>
        </div>

        <div className="field">
          <div className="field-body">
            <div className="field is-expanded">
              <div className="field has-addons count-of-birds">
                <p className="control">
                  <button className="button is-info" value={true} onClick={this.handleCount}>
                    +
                  </button>
                </p>
                <p className="control is-expanded">
                  <input className="input" value={this.state.count} type="tel" placeholder="Number of birds" disabled/>
                </p>
                <p className="control">
                  <button className="button is-info" value={false} onClick={this.handleCount}>
                    -
                  </button>
                </p>
              </div>
              <p className="help">How many birds did you see?</p>
            </div>
          </div>
        </div>

        <div className="field">
          <Datetime name="dateTime" onChange={this.handleDateChange} />
          <p className="help">When did you see them?</p>
        </div>

        <div className="field">
          <div className="control">
            <textarea name="description" className="textarea" placeholder="Description" onChange={this.handleInputChange}></textarea>
          </div>
          <p className="help">Description</p>
        </div>

        <div className="field is-grouped columns">
          <div className="field is-grouped column">
            <div className="control">
              <button className="button is-link">Add bird</button>
            </div>
            <div className="control">
              <button className="button is-text">Cancel</button>
            </div>
          </div>

          <div className="column has-text-right">
            <div className={this.state.isActive ? "dropdown is-right is-active" : "dropdown is-right"}>
              <div className="dropdown-trigger">
                <button className="button" onClick={this.toggleActive}>
                  <span>Advanced</span>
                  <span className="icon is-small">
                    <i className={this.state.isActive ? "fa fa-angle-up" : "fa fa-angle-down"}></i>
                  </span>
                </button>
              </div>

              <div className="dropdown-menu"  >
                <div className="dropdown-content">
                  <div className="dropdown-item">

                    <div className="field">
                      <label className="label">Id (<span className="has-text-grey">Optional</span>)</label>
                      <div className="control">
                        <input className="input" type="text" placeholder="Id" />
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>

      </form>
    );
  }
}

export default AddSighting;
