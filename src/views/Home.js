import React, { Component } from "react";
import Header from "components/Header";
import { Container } from "bloomer";
import Markdown from "react-markdown";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    const { markdown } = this.props;
    console.log(markdown);
    return (
      <React.Fragment>
        <Header
          title="Welcome to KvaaK!"
          subtitle="Platform for serious twitchers!"
        />
        <Container style={{ marginTop: 30, marginBottom: 30 }}>
          <p>
            With <strong>KvaaK!</strong> you can checkout what birds have been
            spotted by your twitcher friends and report your own sightings!
          </p>
          <br /> <br />
          <Markdown source={markdown} />
        </Container>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  markdown: state.markdown
});

export default connect(mapStateToProps)(Home);
