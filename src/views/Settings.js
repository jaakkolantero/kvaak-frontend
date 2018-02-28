import React from "react";
import debounce from "lodash.debounce";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setBackendUrl, selectBackend } from "reducer/backends/actions";
import Header from "components/Header";
import { Container, Title } from "bloomer";

let BackendUrlInput = ({ id, url, ref, dispatch }) => {
  // https://gist.github.com/krstffr/245fe83885b597aabaf06348220c2fe9
  const innerFunction = debounce(
    (dispatch, id, url) => dispatch(setBackendUrl(id, url)),
    1000
  );
  const asyncActionDebounced = (dispatch, ...args) =>
    innerFunction(dispatch, ...args);

  return (
    <React.Fragment>
      <input
        type="text"
        ref={ref}
        placeholder={url}
        onChange={event => {
          asyncActionDebounced(dispatch, id, event.target.value);
        }}
      />
    </React.Fragment>
  );
};

BackendUrlInput = connect()(BackendUrlInput);

const Backend = ({ id, checked, disabled, onClick, name, customized, url }) => {
  return (
    <React.Fragment>
      <span>
        <input
          readOnly
          type="radio"
          checked={checked}
          disabled={disabled}
          onClick={onClick}
        />
        {name}
      </span>
      {checked &&
        customized && (
          <React.Fragment>
            <BackendUrlInput url={url} id={id} />
          </React.Fragment>
        )}
    </React.Fragment>
  );
};
Backend.propTypes = {
  onClick: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired
};

const BackendList = ({ backends, onSelectBackend }) => (
  <React.Fragment>
    <Header title="Settings" subtitle="Do it like that!" />
    <br />
    <Container>
      <Title>API endpoints:</Title>
      <div style={{ paddingLeft: 10 }}>
        {backends.map(backend => (
          <React.Fragment key={backend.id}>
            <Backend {...backend} onClick={() => onSelectBackend(backend.id)} />
            <br />
          </React.Fragment>
        ))}
      </div>
    </Container>
    <br />
  </React.Fragment>
);

const mapStateToProps = state => ({
  backends: state.backends
});

const mapDispatchToProps = dispatch => ({
  onSelectBackend(id) {
    dispatch(selectBackend(id));
  }
});

const BackendListConnect = connect(mapStateToProps, mapDispatchToProps)(
  BackendList
);

export default BackendListConnect;
