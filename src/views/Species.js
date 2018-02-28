import React, { Component } from "react";
import Header from "components/Header";
import { Container } from "bloomer";
import { connect } from "react-redux";

class Species extends Component {
  render() {
    const { species } = this.props;
    return (
      <React.Fragment>
        <Header title="Species" subtitle="Aww! Pretty mallard!" />
        <Container
          hasTextAlign="centered"
          style={{ maxWidth: 320, marginTop: 30, marginBottom: 30 }}
        >
          {species &&
            species.map(bird => (
              <React.Fragment key={bird.name}>
                <h1>{bird.name}</h1>
                <hr />
              </React.Fragment>
            ))}
        </Container>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ species }) => ({ species });

export default connect(mapStateToProps)(Species);
