import React, { Component } from 'react';
import Header from 'components/Header';
import {Container, Field, Radio, Control, Label, FieldLabel, FieldBody, Input} from 'bloomer';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backend: "http://localhost:8081",
      isCustom: false,
      customUrl: ""
    };
    this.handleCustomChange = this.handleCustomChange.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCustomChange = (event) => {
    this.setState({customUrl: event.target.value});
  }

  handleInput = (event) => {
    let value = event.target.value;
    if (value === "custom") {
      this.setState({isCustom: true});
    } else {
      this.setState({isCustom: false});
      console.log(value);
    }
  }

  handleSubmit = (event) => {
    console.log(this.state.customUrl);
    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <Header title="Settings" subtitle="Do it like that!" />
        <Container style={{ marginTop: 30, marginBottom: 30 }}>
          <Field>
            <Label>Backend</Label>
            <Control onChange={this.handleInput}>
              <Radio name="backend" value="http://localhost:8000">kvaak-backend</Radio> <br />
              <Radio name="backend" value="http://localhost:8081">vincit-summer2018</Radio> <br />
              <Radio name="backend" value="https://my.api.mockaroo.com/sightings.json?key=6abd0860">mockaroo <span className="has-text-warning is-italic">(read-only)</span></Radio> <br />
              <Radio name="backend" value="custom">custom</Radio>
            </Control>
          </Field>
          { this.state.custom&&
            <form onSubmit={this.handleSubmit}>
              <Field isHorizontal>
                <FieldLabel isNormal>
                    <Label>API Endpoint</Label>
                </FieldLabel>
                <FieldBody>
                  <Field>
                    <Control>
                      <Input value={this.state.customUrl} onChange={this.handleCustomChange} placeholder='ex. https://localhost:8081/api' style={{maxWidth:320, marginRight:10}}/>
                      <input className="button is-primary" type="submit" value="Submit" />
                    </Control>
                  </Field>
                </FieldBody>
              </Field>
            </form>
          }
        </Container>
      </ React.Fragment>
    );
  }
}

export default Settings;
